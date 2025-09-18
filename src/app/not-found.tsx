import { BtnLink } from "@/components/common/BtnLink";

export default function NotFound() {
  return (
    <section className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="  flex flex-col gap-4 items-center justify-center  border  border-custom-blue p-10">
        <h1 className="text-4xl xl:text-9xl  text-custom-blue font-bold text-center">
          404 {":("}
        </h1>
        <h2 className="text-2xl   font-bold text-center">
          Página no encontrada
        </h2>
        <p className="text-center text-base">
          La página que buscas no existe o ha sido movida.
        </p>
         <BtnLink
          //href="mailto:user@gmail.com"
          href=""
         // target="_blank"
          title="Volver a la página principal"
          className="!gap-4"
        />
      </div>
    </section>
  );
}
