class Container {
    services = {};
    register(name, definition, dependency) {
        this.services[name] = { definition, dependency };
    }
    get(name) {
        const service = this.services[name];
        if (!service.instance) {
            const dependencies = service.dependency.map(el => this.get(el));
            service.instance = new service.definition(...dependencies);
        }
        return service.instance;
    }
}

// 의존성 주입
// container.register("userController", UserController, ["UserSerivce"])
module.exports = new Container();