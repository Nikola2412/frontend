import { Facility } from "./facility"

export class Promotion {
    name: string = ''

    facility: Facility = new Facility()

    validFrom: Date = new Date()
    validTo: Date = new Date()

    percentDiscount?: number
    fixedDiscount?: number
}