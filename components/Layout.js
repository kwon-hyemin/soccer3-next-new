import style from "@/styles/Layout.module.css";
import { Table, Modal,Pagination} from '@/components'

export function Layout({ children }){
  return (<div className={style.container}> 
    <main className={style.main}>{children}</main>
    <Table/>
    <Pagination/>
    <Modal/>
    </div>
  );
}
