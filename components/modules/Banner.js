import Link from "next/link";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>FoodGrab</h2>
        <p>Food Delivery and Takeout!</p>
        <span>
          FoodGrab is an online food ordering and delivery platform launched by
          Us in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/menu">See All</Link>
      </div>
      <div className={styles.right}>
        <img src="/images/banner.png" alt="Food image" />
      </div>
    </div>
  );
}

export default Banner;
