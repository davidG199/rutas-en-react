import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Aside from "../components/aside";
import Footer from "../components/footer";

const Ours = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="row">
        <Aside />
        <div className="col-sm-8">
            <h1>NOSOTROS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque natus itaque temporibus maiores sint quos eum quibusdam. Voluptates sunt laboriosam deserunt et, tempore amet vitae dolorem. Commodi, aspernatur praesentium?
            Praesentium cum quas, quos quisquam ullam aut odit voluptatum excepturi provident eveniet illo fuga eligendi quam animi error est. Atque at recusandae fugit doloremque aut provident illo aliquam ad quis!
            Porro voluptas impedit officiis. Ratione accusantium nisi vero repellendus optio repudiandae in obcaecati nam voluptates provident? Mollitia distinctio sit facere recusandae, veritatis, libero aliquam doloremque corporis, similique minus praesentium voluptatum?
            Modi neque soluta fuga quibusdam, corrupti sunt perspiciatis eveniet aspernatur commodi quaerat dolorum! Repudiandae obcaecati natus tempora atque unde vel corrupti sunt, corporis rerum magni tenetur sed ut sit dolores!
            Vero dolor perferendis, dolorem hic ipsam ratione in? Dignissimos ad libero deserunt molestiae ex natus. Soluta voluptatum dolor sapiente placeat et pariatur. Enim ducimus magnam excepturi veniam cum laudantium omnis!</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ours;
