import { Controller, Get } from "../common/decorator/controller.decorator";
import { AppService } from "./app.service";

// app.use("/user",userRouter);
// userRouter === router.get("name",(req.res)=>{})
@Controller('/user')
export class AppController {
    constructor(private readonly appService: AppService) { }
    // 요청시 user/text로 해야함
    @Get("/text")
    getText(req: any, res: any) {
        res.send(this.appService.getText());
    }

}