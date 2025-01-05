import Link from 'next/link';
import { useEffect } from 'react';

export default function Custom404() {
    useEffect(() => {
        console.log("404 page visited");
        // You can add analytics or error tracking here
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link href="/">Go Back Home</Link>
        </div>
    );
}
