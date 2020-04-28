let myTodos = {
    day:'Monday',
    meetings: 0,
    meetDone: 0,
    
    addMeeting: function(meet=0){
        
        this.meetings = this.meetings + meet
        
    },

    doneMeeting: function(meet=0) {

        this.meetDone = this.meetDone + meet
        
    },

    summary: function(){
        this.meetings = this.meetings - this.meetDone
        console.log(`You have total ${this.meetings} meetings today !!!`);
    },

    resetMeetings: function() {

        this.meetings = 0 
        this.meetDone = 0

        console.log(`Your total meetings are set to reset !!!`);
        
    }
}


myTodos.addMeeting(5)

myTodos.doneMeeting(2)

myTodos.summary()

myTodos.resetMeetings()




