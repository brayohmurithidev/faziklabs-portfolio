import { NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';

const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const ACCOUNT_ID = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
const LOCATION_ID = process.env.GOOGLE_BUSINESS_LOCATION_ID;

interface Review {
    reviewer?: {
        displayName?: string;
        profilePhotoUrl?: string;
    };
    rating?: number;
    comment?: string;
    createTime?: string;
}

export async function GET() {
    try {
        if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !ACCOUNT_ID || !LOCATION_ID) {
            throw new Error('Missing required environment variables');
        }

        // Initialize the auth client
        const auth = new GoogleAuth({
            credentials: {
                client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: GOOGLE_PRIVATE_KEY,
            },
            scopes: ['https://www.googleapis.com/auth/business.manage'],
        });

        // Get the access token
        const client = await auth.getClient();
        const { token } = await client.getAccessToken();

        // Fetch reviews using the REST API
        const response = await fetch(
            `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Google API Error:', errorData);
            throw new Error(`Google API Error: ${errorData.error?.message || 'Failed to fetch reviews'}`);
        }

        const data = await response.json();
        const reviews = data.reviews || [];

        // Transform the data to match our frontend expectations
        const transformedReviews = reviews.map((review: Review) => ({
            name: review.reviewer?.displayName || 'Anonymous',
            rating: review.rating || 0,
            comment: review.comment || '',
            createTime: review.createTime,
            reviewer: {
                profilePhotoUrl: review.reviewer?.profilePhotoUrl,
                displayName: review.reviewer?.displayName || 'Anonymous'
            }
        }));

        return NextResponse.json({ reviews: transformedReviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Failed to fetch reviews',
                details: error instanceof Error ? error.stack : undefined
            },
            { status: 500 }
        );
    }
} 