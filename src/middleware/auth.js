import { redirect } from "react-router-dom";

export function auth() { //kenapa tidak ada default : karena ga ada element ui
    let access_token = localStorage.getItem("access_token");


    //jika tidak ada access_token di localstorage
    if (!access_token) {
        //navigate() -> untuk fungsi yang menangani event
        //redirect() -> untuk fungsi biasa (bukan penanganan event), digunakan dengan return
        return redirect("/login");
    }


    //jika ada access_token di lanjutkan prosesnya
    return null;
}