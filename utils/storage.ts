// set 'cart' localStorage with 30 minutes expiry:
// setWithExpiry('cart', cart.value, 30)
export const setWithExpiry = (key: string, value: any, expDurationMinute: number) => {
  const now = new Date().getTime();
  const expiry = now + expDurationMinute * 60 * 1000;

  const item = {
    value: value,
    expiry: expiry,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

// will return null when localStorage called has expired or didn't exist
export const getWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date().getTime();

  if (now > item.expiry) {
    localStorage.removeItem(key); 
    return null;
  }

  return item.value;
};

// update localStorage without updating the expiry
export const updateStorage = (key: string, newValue: any) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);

  const updatedItem = {
    value: newValue,
    expiry: item.expiry,
  };

  localStorage.setItem(key, JSON.stringify(updatedItem));
};
