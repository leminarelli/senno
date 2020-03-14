class Timer {
    getStartTime(){
        return this.startTime;
    }
    getStopTime(){
        return this.stopTime;
    }
    start(){
        this.stopTime = undefined;
        this.startTime = new Date();
    }
    stop(){
        if(!this.startTime) throw new Error("Start the timer first!");
        this.stopTime = new Date();
    }
    getTimespan(){
        if(!this.startTime) throw new Error("Start the timer first!");
        if(!this.stopTime) throw new Error("Stop the timer first!");
        return this.stopTime.getTime() - this.startTime.getTime();
    }
    getTimespanString(){
        let timespan = this.getTimespan();
        if(timespan < 1000)
            return `${(timespan).toLocaleString()} ms`;
        if(timespan < 60000)
            return `${(timespan/1000).toLocaleString()} s`;
        if(timespan < 3600000)
            return `${(timespan/60000).toLocaleString()} m`;
        if(timespan < 86400000)
            return `${(timespan/3600000).toLocaleString()} h`;
    }
    reset(){
        this.startTime = this.stopTime = undefined;
    }
}

module.exports = Timer;