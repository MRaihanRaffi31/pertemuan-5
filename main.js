const mainText = document.getElementById("main-text");
class Bank {
    constructor(nama, saldo) {
        this.nama = nama;
        this.saldo = saldo;
    }

    Deposit(jumlah_uang) {
        this.saldo = this.saldo +  jumlah_uang;
    }
    tarik(jumlah_uang) {
        if (jumlah_uang > this.saldo) {
            alert("Saldo tidak cukup");
        } else {
            this.saldo = this.saldo - jumlah_uang;
        }          
                    
        }
        cekSaldo() {
            return`Nama: ${this.nama} \n Saldo: ${this.saldo}`;
        }       
    }

let bank = new Bank("Rehan", 1000000);
bank.Deposit(500000);
bank.tarik(2000000);
mainText.innerHTML = `Nama: ${bank.nama} <br> Saldo: ${bank.saldo}`;