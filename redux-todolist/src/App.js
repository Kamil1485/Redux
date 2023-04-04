import React, { useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import {
  listeyeEkle,
  isaretle,
  TumunuTemizle,
  Guncelleme,
} from "./reducers/actions";
import { listedenSıl } from "./reducers/actions";
function App(props) {
  console.log(props.liste);
  const [ınputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(0);
  const handleUpdate = (id, baslik) => {
    const selectedItem = props.liste.filter((list) => list.id === id)[0];
    console.log(selectedItem);
    setInputValue("");
    setEditItemId(selectedItem.id);
    setEditMode(true);
    setInputValue(selectedItem.baslik);
  };

  console.log(ınputValue);

  const UpdatedTodo=()=>{
    props.Guncelleme(editItemId, ınputValue)
    setEditMode(false)
    setInputValue("");
  }
  // ...
//props.Guncelleme(editItemId, ınputValue)
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={ınputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        {editMode ? (
          <button onClick={() => UpdatedTodo()}>
            Editt
          </button>
        ) : (
          <button
          disabled={!ınputValue}
            onClick={() => {
              setInputValue("");
              props.listeyeEkle(ınputValue);
            }}
          >
            Ekle
          </button>
        )}
      </div>

      <div className="liste">
        {props.liste.map((list) => {
          return (
            <div
              onClick={() => props.isaretle(list.id)}
              key={list.id}
              className={list.tamamlandi ? "yapildi" : ""}
            >
              <p>
                {list.baslik}{" "}
                <button onClick={() => handleUpdate(list.id, list.baslik)}>
                  Güncelle
                </button>{" "}
                <span>
                  {!editMode && <button onClick={() => props.listedenSıl(list.id)}>
                    Sil
                  </button>}
                </span>
              </p>
            </div>
          );
        })}
      </div>

      <button onClick={() => props.TumunuTemizle()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
}
const mapStateProps = (state) => {
  return {
    liste: state.liste,
  };
};

export default connect(mapStateProps, {
  listeyeEkle,
  listedenSıl,
  isaretle,
  TumunuTemizle,
  Guncelleme,
})(App); //4.adım
