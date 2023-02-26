export const EKLE="EKLE";
export const SIL="SIL";
export const TEMIZLE="TEMIZLE"
export const ISARETLE="ISARETLE"
export const GUNCELLE="GUNCELLE"
//actions
export const listeyeEkle=(baslik)=>{
    console.log(baslik)
return{
    
    type:EKLE,payload:baslik
}
}

export const listedenSıl=(id)=>{
    return{
        type:SIL,payload:id
    }
    }

export const isaretle=(id)=>{
    return{
        type:ISARETLE,payload:id
    }
}

export const TumunuTemizle=()=>{
    return{
        type:TEMIZLE,payload:""
    }
}

export const Guncelleme=(id,baslik)=>{
    return{
        type:GUNCELLE,payload:{id:id,baslik:baslik}
    }
}