export default function Payments({ payments }) {
    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Payments</h1>
            {payments.length > 0 ? (
                <ul>
                    {payments.map((payment) => (
                        <li key={payment.id} className="p-4 border-b">
                            <p><strong>Payment ID:</strong> {payment.id}</p>
                            <p><strong>Amount:</strong> {payment.amount}</p>
                            <p><strong>Date:</strong> {payment.date}</p>
                            <p><strong>Status:</strong> {payment.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No payment records found.</p>
            )}
        </div>
    );
}
