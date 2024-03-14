class CategoryPage {
    get tambahButton() {
        return $('(//a[@class="chakra-button css-1piskbq"])');
    }
  
    get namaInput() {
      return $('(//input[@id="nama"])');
    }
  
    get deskripsiInput() {
        return $('(//input[@id="deskripsi"])');
    }

    get simpanButton() {
        return $('(//button[@class="chakra-button css-l5lnz6"])')
    }

    get meatballsMenu() {
        return $('(//button[@class="chakra-button chakra-menu__menu-button css-pu8osu"])[1]')
    }

    get hapusOption() {
        return $('(//button[@class="chakra-menu__menuitem css-13c7rae"])[1]')
    }

    get deleteButton() {
        return $('(//button[@class="chakra-button css-n45e6f"])')
    }
  
    async addCategory(nama, deskripsi) {
        await this.tambahButton.click()
        await this.namaInput.setValue(nama);
        await this.deskripsiInput.setValue(deskripsi);
        await this.simpanButton.click();
    }
    
    async deleteCategory() {
        await this.meatballsMenu.click();
        await this.hapusOption.click();
        await this.deleteButton.click();
    }
  }
  
  module.exports = new CategoryPage();