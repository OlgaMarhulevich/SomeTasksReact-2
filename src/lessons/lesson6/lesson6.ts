console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string
    group: number
    progress: Array<number>
    averageScore: number
}

class Student implements IStudent {
    averageScore: number

    constructor(public name: string, public group: number, public progress: Array<number>) {
        this.averageScore = progress.reduce((sum, i) => sum + i) / progress.length
    }

    private static sortByAverage(a: IStudent, b: IStudent) {
        return a.averageScore - b.averageScore
    }

    static sort(arr: IStudent[]) {
        return [...arr].sort(this.sortByAverage)
    }

    private static isAllMarkEqual(marks: number[], searchMark: number) {
        return marks.every(i => i === searchMark)
    }

    private static filterGoodStudents(arr: IStudent[]) {
        return arr.filter(s => this.isAllMarkEqual(s.progress, 4) || this.isAllMarkEqual(s.progress, 5))
    }

    static printGoodStudents(arr: IStudent[]) {
        this.filterGoodStudents(arr).forEach(s =>
            console.log('Name: ' + s.name + '. Group: ' + s.group))
    }
}

let arr = [
    new Student("Olya", 43, [5, 2, 1, 3, 4]),
    new Student("Sveta", 55, [2, 2, 4, 3, 3]),
    new Student("Polya", 43, [4, 1, 2, 4, 4]),
    new Student("Roma", 43, [5, 5, 5, 2, 4]),
    new Student("Nika", 45, [3, 2, 3, 3, 3]),
    new Student("Maks", 43, [5, 5, 5, 5, 5]),
    new Student("Dima", 55, [5, 4, 2, 4, 4]),
    new Student("Lena", 75, [5, 2, 5, 5, 5]),
    new Student("Igor", 43, [4, 4, 4, 4, 4]),
    new Student("Nata", 43, [4, 4, 4, 1, 2]),
]
console.log(Student.sort(arr))
Student.printGoodStudents(arr)


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?
interface IClass {
    a: number
    b: number
}

class Class implements IClass {
    constructor(public a: number = 1, public b: number = 2) {
    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

interface ITime {
    hours: number
    minutes: number
    seconds: number
}

class Time implements ITime {
    constructor(public hours: number = 0, public minutes: number = 0, public seconds: number = 0) {
    }

    setTime(hours: number = this.hours, minutes: number = this.minutes, seconds: number = this.seconds) {
        if (hours < 0 || hours > 24) {
            console.error('Invalid hours!')
        } else {
            this.hours = hours
        }
        if (minutes < 0 || minutes > 60) {
            console.error('Invalid minutes!')
        } else {
            this.minutes = minutes
        }
        if (seconds < 0 || seconds > 60) {
            console.error('Invalid seconds!')
        } else {
            this.seconds = seconds
        }
    }

    changeTimeOn(onHours: number = 0, onMinutes: number = 0, onSeconds: number = 0) {
        if ((this.hours + onHours) < 0 || (this.hours + onHours) > 24) {
            console.error('Invalid hours!')
        } else {
            this.hours += onHours
        }
        if ((this.minutes + onMinutes) < 0 || (this.minutes + onMinutes) > 60) {
            console.error('Invalid hours!')
        } else {
            this.minutes += onMinutes
        }
        if ((this.seconds + onSeconds) < 0 || (this.seconds + onSeconds) > 60) {
            console.error('Invalid hours!')
        } else {
            this.seconds += onSeconds
        }
    }

    static getTimeInFormat(time: ITime) {
        return (time.hours / 10 < 1 ? '0' + time.hours : time.hours.toString()) + ':' +
            (time.minutes / 10 < 1 ? '0' + time.minutes : time.minutes.toString()) + ':' +
            (time.seconds / 10 < 1 ? '0' + time.seconds : time.seconds.toString())
    }
}

let time = new Time()
time.setTime(19, 41)
console.log(time)
time.changeTimeOn(0, 10)
console.log(time)
console.log(Time.getTimeInFormat(time))

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
interface IBuyer {
    _surname: string
    _name: string
    _address: string
    _cardNumber: number
}

class Buyer implements IBuyer {
    constructor(public _surname: string, public _name: string, public _address: string, public _cardNumber: number) {
    }

    get surname() {
        return this._surname
    }

    get name() {
        return this._name
    }

    get address() {
        return this._address
    }

    get cardNumber() {
        return this._cardNumber
    }

    set surname(surname) {
        this._surname = surname
    }

    set name(name) {
        this._name = name
    }

    set address(address) {
        this._address = address
    }

    set cardNumber(cardNumber) {
        this._cardNumber = cardNumber
    }

    info() {
        console.log('Name: ' + this._name + '. Address: ' + this._address + '. Card: ' + this._cardNumber)
    }

    private static sortByName(a: IBuyer, b: IBuyer) {
        return a._surname >= b._surname ? 1 : -1
    }

    static sort(arr: IBuyer[]) {
        return arr.sort(this.sortByName)
    }

    private static filterByRange(a: IBuyer) {
        return a._cardNumber > 0 && a._cardNumber < 500
    }

    static filter(arr: IBuyer[]) {
        return arr.filter(this.filterByRange)
    }
}

let buyers = [
    new Buyer('Pinchuk', 'Olga', 'Minsk', 654),
    new Buyer('Belaya', 'Olga', 'Gomel', 321),
]
console.log(Buyer.sort(buyers))
console.log(Buyer.filter(buyers))

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
interface ICar {
    brand: string
    numberOfCylinders: number
    power: number
}

class Car implements ICar {
    constructor(public _brand: string, public numberOfCylinders: number, public power: number) {
    }
    print() {
        console.log('brand: ' + this._brand + ', numberOfCylinders: ' + this.numberOfCylinders + ', power: ' + this.power )
    }
    set brand(brand: string) {
        this._brand = brand
    }
}
class Truck extends Car {
    constructor(public _brand: string, public numberOfCylinders: number, public power: number, public _loadCapacity: number) {
        super(_brand, numberOfCylinders, power);
    }
    set loadCapacity(loadCapacity: number) {
        this._loadCapacity = loadCapacity
    }
}

let truck = new Truck('1', 3, 10, 60)
console.log(truck)
truck.brand = 'cool'
truck.loadCapacity = 100
console.log(truck)

// just a plug
export default () => {
};