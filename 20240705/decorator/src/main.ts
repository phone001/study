import express from "express";
import { AppMdule } from "./app/app.modules";
import { createRouter } from "./common/utils/router.utils";

function bootStrap() {
    const app: any = express();
    const appModule = new AppMdule();
    const moduleMetaData = Reflect.getMetadata("module", AppMdule);
    moduleMetaData.controllers.forEach((controller: any) => {
        const router = createRouter(controller, moduleMetaData.providers);
        app.use("/", router);
    })
    app.listen(3000, () => {
        console.log("server");
    })
}
bootStrap();