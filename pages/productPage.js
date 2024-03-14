class ProductPage {
    get tambahButton() {
        return $('(//a[@class="chakra-button css-1piskbq"])');
    }
  
    get namaInput() {
        return $('(//input[@id="nama"])');
    }
  
    get deskripsiInput() {
        return $('(//input[@id="deskripsi"])');
    }

    get hargaBeliInput() {
        return $('(//input[@id="harga beli"])');
    }

    get hargaJualInput() {
        return $('(//input[@id="harga jual"])');
    }

    get stokInput() {
        return $('(//input[@id="stok"])');
    }

    get kategoriInput() {
        return $('(//input[@id="kategori"])');
    }

    get kategoriList() {
        return $('(//td[@class="css-u3dlpe"])[1]');
    }

    get simpanButton() {
        return $('(//button[@class="chakra-button css-l5lnz6"])')
    }

    get meatballsMenu() {
        return $('(//button[@class="chakra-button chakra-menu__menu-button css-pu8osu"])[1]')
    }

    get hapusOption( ){
        return $('(//button[@class="chakra-menu__menuitem css-13c7rae"])[1]')
    }

    get deleteButton() {
        return $('(//button[@class="chakra-button css-n45e6f"])')
    }
  
    async addProduct(nama, deskripsi, hargaBeli, hargaJual, stok) {
        await this.tambahButton.click();
        await this.namaInput.setValue(nama);
        await this.deskripsiInput.setValue(deskripsi);
        await this.hargaBeliInput.setValue(hargaBeli);
        await this.hargaJualInput.setValue(hargaJual);
        await this.stokInput.setValue(stok);
        await this.kategoriInput.click();
        await this.kategoriList.click();
        await this.simpanButton.click();
    }

    async deleteProduct() {
        await this.meatballsMenu.click();
        await this.hapusOption.click();
        await this.deleteButton.click();
    }
  }
  
  module.exports = new ProductPage();