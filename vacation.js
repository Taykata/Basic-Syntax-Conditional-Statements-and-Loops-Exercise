function vacation(people,group ,day) {

    let pricePerHuman = 0;

    if (day === "Friday") {
        if (group === "Students") {
            pricePerHuman += 8.45;
        } else if (group === "Business") {
            pricePerHuman += 10.90;
        } else if (group === "Regular") {
            pricePerHuman += 15;
        }
    } else if (day === "Saturday") {
        if (group === "Students") {
            pricePerHuman += 9.80;
        } else if (group === "Business") {
            pricePerHuman += 15.60;
        } else if (group === "Regular") {
            pricePerHuman += 20;
        }
    } else if (day === "Sunday") {
        if (group === "Students") {
            pricePerHuman += 10.46;
        } else if (group === "Business") {
            pricePerHuman += 16;
        } else if (group === "Regular") {
            pricePerHuman += 22.50;
        }
    }

    let totalPrice = pricePerHuman * people;

    if (group === "Students" && people >= 30) {
        totalPrice *= 0.85;
    } else if (group === "Business" && people >= 100) {
        totalPrice = pricePerHuman * (people - 10);
    } else if (group === "Regular" && (people >= 10 && people <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30, "Students", "Sunday");