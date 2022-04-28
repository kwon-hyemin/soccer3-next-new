import style from "@/styles/Layout.module.css";
import {Nav, Footer, Table, Modal,Header,Pagination} from '@/components'

export function Layout({ children }){
  return (<div className={style.container}>
            <Nav/>
    <main className={style.main}>{children}</main>
    <Footer/>
    <Header/>
    <Nav/>
    <Table/>
    <Pagination/>
    <Footer/>
    <Modal/>
    </div>
  );
}
