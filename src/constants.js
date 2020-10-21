import keyBy from 'lodash/keyBy';

export const GOOGLE_MAP_API_KEY = 'AIzaSyAg1v7OQflq5loAokdrpNLPFmsSqDF4-PY';

export const SUPPLIES = keyBy([
  {
    id: 'life-vest',
    label: 'Áo phao',
  },
  {
    id: 'water',
    label: 'Nước uống',
  },
  {
    id: 'food',
    label: 'Thực phẩm',
  },
  {
    id: 'medicine',
    label: 'Thuốc',
  },
  {
    id: 'money',
    label: 'Tiền',
  },
  {
    id: 'essentials',
    label: 'Nhu yếu phẩm',
  },
], 'id');

export const FOOD_CATEGORIES = keyBy([
  {
    id: 'instant-noodle',
    label: 'Mì gói',
  },
  {
    id: 'canned-food',
    label: 'Đồ hộp',
  },
  {
    id: 'porridge',
    label: 'Cháo gói',
  },
  {
    id: 'bread',
    label: 'Bánh mì mềm',
  },
], 'id');

export const MEDICINE_CATEGORIES = keyBy([
  {
    id: 'diarrhea',
    label: 'Tiêu chảy',
  },
  {
    id: 'anti-biotics',
    label: 'Kháng sinh/panadol',
  },
  {
    id: 'paste',
    label: 'Thuốc bôi chân tay',
  },
], 'id');

export const MONEY_CATEGORIES = keyBy([
  {
    id: 100,
    label: 'Dưới 100/hộ',
  },
  {
    id: 500,
    label: 'Dưới 500/hộ',
  },
  {
    id: 1000,
    label: 'Dưới 1 triệu/hộ',
  },
  {
    id: 2000,
    label: 'Dưới 2 triệu/hộ',
  },
  {
    id: -1,
    label: 'Trên 2 triệu/hộ',
  },
], 'id');

export const ESSENTIALS_CATEGORIES = keyBy([
  {
    id: 'personal-hygiene',
    label: 'Vật dụng vệ sinh cá nhân',
  },
  {
    id: 'soap',
    label: 'Xà bông tắm gội',
  },
  {
    id: 'laundry',
    label: 'Xà bông giặt giũ',
  },
  {
    id: 'tampon',
    label: 'BVS',
  },
  {
    id: 'clothes',
    label: 'Quần ',
  },

], 'id');
