const logger = param => store => next => action => {
    if(param.destination === 'console') {
        console.log(action.type);
    }
    next(action);
}

export default logger;