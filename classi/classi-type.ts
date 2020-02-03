class MioLogger {
    public log(msg: string): void {
        console.log(msg);
    }

    public generaId(): number {
        return Math.round(Math.random() * 10000000);
    }
}

interface RaffoLog extends MioLogger {
    email: string;
}

class RaffoMailLogger implements RaffoLog {
    email: string;

    constructor(email: string) {
        this.email = email;
    }
    public log(msg: string): void {
        console.log(this.email + ": " + msg)
    }

    public generaId(): number {
        return 1;
    }
}

let mioLogger = new MioLogger();
mioLogger.log('ciao');

let raffoMailLogger = new RaffoMailLogger('r.ficcadnti@exolab.it');
raffoMailLogger.log('ciao');

let raffoMailLogger1: RaffoMailLogger;

function logger(logger: MioLogger) {
    let n: string;
    n = '' + logger.generaId();
    logger.log(n);
}

raffoMailLogger1 = new RaffoMailLogger('r.ficcadnti@exolab.it');
logger(raffoMailLogger1);

mioLogger = new MioLogger();
logger(mioLogger);
