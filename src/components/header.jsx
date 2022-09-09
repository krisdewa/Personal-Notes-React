import Input from "./input";
import style from "../styles/header.module.css";

const Header = ({ search, updateQuery }) => {
  return (
    <header className={style.container}>
      <h1 className={style.heading}>Submission - Proyek Akhir: Membangun Aplikasi Catatan Menggunakan React </h1>
      <Input
        value={search}
        onChange={updateQuery}
        type='search'
        id='search_note'
        name='search_note'
        placeholder='Cari Catatan...'
      />
    </header>
  );
};

export default Header;
