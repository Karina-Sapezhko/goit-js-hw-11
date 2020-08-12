class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;

    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.mins = document.querySelector('[data-value="mins"]');
    this.secs = document.querySelector('[data-value="secs"]');
  }
  startTime() {
    setInterval(() => {
      const delteTime = this.targetDate - new Date();
      this.addTimerMarkup(delteTime);
    }, 1000);
  }

  addTimerMarkup(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const newCountdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 17, 2020"),
});
newCountdownTimer.startTime();
