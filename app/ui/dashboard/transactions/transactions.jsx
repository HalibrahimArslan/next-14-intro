import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image src={'/noavatar.png'} alt="" width={40} height={40} className="user-image" />
                            John Doe
                        </td>
                        <td className={`${styles.status} ${styles.pending}`}>
                            Pending
                        </td>
                        <td>14.02.2024</td>
                        <td>$ 122.00</td>
                    </tr>
                    <tr>
                        <td>
                            <Image src={'/noavatar.png'} alt="" width={40} height={40} className="user-image" />
                            John Doe
                        </td>
                        <td className={`${styles.status} ${styles.cancelled}`}>
                            Pending
                        </td>
                        <td>14.02.2024</td>
                        <td>$ 122.00</td>
                    </tr>
                    <tr>
                        <td>
                            <Image src={'/noavatar.png'} alt="" width={40} height={40} className="user-image" />
                            John Doe
                        </td>
                        <td className={`${styles.status} ${styles.pending}`}>
                            Pending
                        </td>
                        <td>14.02.2024</td>
                        <td>$ 122.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;