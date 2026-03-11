export function generateStaticParams() {
    return [
        { packageId: "1-day" },
        { packageId: "3-day" },
        { packageId: "5-day" },
    ];
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
