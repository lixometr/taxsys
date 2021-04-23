import { Car } from "./car.entity"
import { DriverEntity } from "./driver.entity"

export class Fine {
    account: "40101810845250010102"
    address: "Московская обл, г Раменское, ул Михалевича, д 131"
    autopay: "0"
    bank: "ГУ БАНКА РОССИИ ПО ЦФО//УФК ПО М"
    bik: "044525000"
    car: Car
    driver: DriverEntity
    car_id: 4062
    commission: 0
    coords: "38.260883,55.560464000000003"
    created_at: "2021-02-11T00:27:50.000000Z"
    discount: "0"
    discount_end_date: "0000-00-00 00:00:00"
    division: "1146311"
    do_id: 0
    driver_id: 0
    enable_discount: 0
    gname: string
    id: 1
    id_post: "50#FF665804858"
    images: string[]
    inn: "5040031734"
    issue_date: "2021-03-30 04:00:57"
    issue_number: "18810450203110006422"
    kbk: "18811601123010001140"
    koap_code: "12.8ч.1"
    koap_text: "УПРАВЛЕНИЕ ТРАНСПОРТНЫМ СРЕДСТВОМ ВОДИТЕЛЕМ, НАХОДЯЩИМСЯ В СОСТОЯНИИ ОПЬЯНЕНИЯ"
    kpp: "504001001"
    method: ""
    oktmo: "46768000"
    partner_id: 3
    payment_date: "0000-00-00 00:00:00"
    payment_summ: 0
    photos: "0"
    profit: 0
    purpose: ""
    status: ""
    summa: 30000
    supplier_bill_id: "18810450203110006422"
    updated_at: "2021-02-11T00:27:50.000000Z"
    vehicle_model: "ХЕНДЭ  СОЛЯРИС"

    getPrice() {
        if (this.hasSale()) {
            const d = (this.getSale() / 100) * this.getOldPrice();
            let price = this.getOldPrice() - d;
            return price.toFixed(2)
        }
        return this.summa;
    }
    getOldPrice() {
        if (!this.hasSale) return 0;
        return this.summa;
    }
    getSale() {
        const sale = parseInt(this.discount);
        if (isNaN(sale)) {
            return 0;
        }
        return sale;
    }
    hasSale() {
        if (this.getSale() <= 0) return false;
        const discountDate = new Date(this.discount_end_date);
        if (discountDate.toString() === "Invalid Date") return false;
        return new Date().getTime() < discountDate.getTime();
    }
    getMainImage() {
        return this.images && this.images[0] || ''
    }
    getImages() {
        if(!this.images) return []
        return this.images.slice(1, this.images.length)
    }
    getStatus() {
        return 'оплачен'
    }
}