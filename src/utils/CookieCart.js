import { getCookie, setCookie } from "cookies-next";

export const CookieCart = {
  pushToCart(item) {
    const stringCart = getCookie("guestCart") || null;
    const currentCartTemp = stringCart !== null ? JSON.parse(stringCart) : [];
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    setCookie("guestCart", [...currentCartTemp, { ...item, id: uniqid }]);
    return currentCartTemp;
  },

  removeFromCartById(id) {
    return new Promise(function (resolve, reject) {
      const stringCart = getCookie("guestCart") || null;
      const currentCartTemp = stringCart !== null ? JSON.parse(stringCart) : [];
      const filteredCart = currentCartTemp?.filter(
        (cartItem) => cartItem?.id !== id,
      );
      console.group("Удаление товара");
      console.log("id для удаления", id);
      console.log("Длина оригинала массива:", currentCartTemp);
      console.log("Длина отфильтрованного массива:", filteredCart);
      console.groupEnd();
      setCookie("guestCart", filteredCart);

      filteredCart?.length !== currentCartTemp?.length
        ? resolve("Успешно удалено")
        : reject("Ошибка при удалении");
    });
  },

  clearAllCart() {
    setCookie("guestCart", null);
  },

  getParsedCart() {
    const stringCart = getCookie("guestCart") || null;
    return stringCart !== null ? JSON.parse(stringCart) : [];
  },
};
