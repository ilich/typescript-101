function classLogger(constructor: Function) {
    console.log("Calling class constructor");
    console.log("----------------------------------");
}

function methodLogger(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    var originalMethod = descriptor.value;
    
    descriptor.value = (...args: any[]) => {
        console.log(`Method: ${propertyKey}`);
        console.log(`Arguments: ${JSON.stringify(args)}`);
        
        var result = originalMethod.apply(this, args);
        console.log(`Result: ${JSON.stringify(result)}`);
        console.log("----------------------------------");
        
        return result;
    };
    
    return descriptor;
}

@classLogger
class Program {
    
    @methodLogger
    main() {
        console.log("Program.main()");
    }
    
    @methodLogger
    add(a: number, b: number) {
        return a + b;
    }
};

let program = new Program();
program.main();
var c = program.add(2, 2);