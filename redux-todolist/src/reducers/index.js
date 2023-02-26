//2.adım
import { EKLE, ISARETLE } from "./actions";
import { SIL } from "./actions";
import { TEMIZLE } from "./actions";
import { GUNCELLE } from "./actions";
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE = {
  liste: [
    { id: uuidv4(), baslik: "Alisveris Yap", tamamlandi: false },
    { id: uuidv4(), baslik: "Fatura ode", tamamlandi: true },
    { id: uuidv4(), baslik: "Kimyacıyı bul", tamamlandi: true },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  //5.adım
  switch (action.type) {
    case EKLE:
      return {
        ...state,
        liste: [
          ...state.liste,
          {
            id: uuidv4(),
            baslik: action.payload,
            tamamlandi: false,
          },
        ],
      };

    case SIL:
      return {
        ...state,
        liste: state.liste.filter((list) => list.id !== action.payload),
      };

    case ISARETLE:
      return {
        ...state,
        liste: state.liste.map((item) =>
          item.id === action.payload
            ? { ...item, tamamlandi: !item.tamamlandi }
            : item
        ),
      };

    case TEMIZLE:
      return {
        ...state,
        liste: state.liste.filter((item) => item.tamamlandi === false),
      };

    case GUNCELLE:
      return {
        ...state,
        liste: state.liste.map((item) => {
          console.log(action.payload.baslik);
          if (item.id === action.payload.id) {
            return {
              ...item,
              baslik: action.payload.baslik,
            };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};

/*
            case TEMIZLE:
              return {
                ...state,
                liste:state.liste.map((item)=>{return {...item,tamamlandi:false}})
              };
*/
