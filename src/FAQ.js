export default function FAQ() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">FAQ</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Personal Banking</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>What are the account options available at Kore Bank?</strong><br/>
                        Kore Bank offers various account types, including savings accounts, checking accounts, and certificates of deposit (CDs). Each account comes with unique features to suit different financial needs.
                    </li>
                    <li><strong>How can I open a new account with Kore Bank?</strong><br/>
                        You can open a new account online through our website or by visiting any of our branch locations. You'll need a valid ID, proof of address, and your Social Security Number.
                    </li>
                    <li><strong>What are the fees associated with Kore Bank accounts?</strong><br/>
                        Kore Bank offers fee-free checking and savings accounts, but some accounts may have maintenance fees, overdraft fees, or ATM fees. Please check our fee schedule for detailed information.
                    </li>
                    <li><strong>How can I access my Kore Bank account online?</strong><br/>
                        You can access your account through the Kore Bank online banking portal or our mobile app, which is available for both iOS and Android devices. Simply log in with your account credentials.
                    </li>
                    <li><strong>What should I do if I lose my debit card?</strong><br/>
                        If you lose your debit card, immediately report it through our mobile app or contact Kore Bank's customer service. We will block the card and issue a replacement.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Investments</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>What investment options does Kore Bank offer?</strong><br/>
                        Kore Bank provides a range of investment products, including mutual funds, stocks, bonds, and retirement accounts like IRAs. Our financial advisors can help you choose the right options based on your goals.
                    </li>
                    <li><strong>How do I start investing with Kore Bank?</strong><br/>
                        To start investing, you can open an investment account online or schedule an appointment with one of our financial advisors. They will guide you through the process based on your risk tolerance and financial objectives.
                    </li>
                    <li><strong>What are the risks associated with investing?</strong><br/>
                        All investments carry some level of risk, including the potential loss of principal. The specific risks depend on the type of investment. Kore Bank offers personalized advice to help you make informed decisions.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Loans</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>What types of loans does Kore Bank offer?</strong><br/>
                        Kore Bank offers a variety of loans, including personal loans, auto loans, home mortgages, and business loans. Each loan product has different terms and conditions tailored to your financial needs.
                    </li>
                    <li><strong>How can I apply for a loan at Kore Bank?</strong><br/>
                        You can apply for a loan online through the Kore Bank website, visit a branch, or speak with a loan officer. The application process typically requires proof of income, credit history, and identification documents.
                    </li>
                </ul>
            </section>
        </div>
    );
}
