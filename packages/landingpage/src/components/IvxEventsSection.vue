<template>
  <div class="root">
    <img
      class="meetup_calendar"
      src="../assets/upcoming_events.svg"
      alt="meetup_events"
    >

    <!-- <div class="gradient_card">
      <div class="calendar_card">
        <div class="day">
          03
        </div>
        <div class="month">
          July
        </div>
        <hr>
        <div class="location">
          Hamburg
        </div>
      </div>

      <div class="calendar_card">
        <div class="day">
          17
        </div>
        <div class="month">
          July
        </div>
        <hr>
        <div class="location">
          Cologne
        </div>
      </div>

      <div class="calendar_card">
        <div class="day">
          24
        </div>
        <div class="month">
          July
        </div>
        <hr>
        <div class="location">
          Karlsruhe
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'IvxEventsSection',
  components: {
  }
}
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
}

.meetup_calendar {
  width: 60%;
  margin: 50px 0;
}

@media screen and (max-width: 996px) {
  .meetup_calendar {
    width: 100%;
  }
}

/* .gradient_card {
  width: 80%;
  max-height: 650px;
  background: linear-gradient(to right, #ED1C40 50%, #F9F7F7 50%);
  padding: 30px;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
}
.calendar_card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  width: 20%;
  padding: 40px 15px;
  margin: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
}

.calendar_card:nth-child(1) {
  transform: translate(100%, 0);
}
.calendar_card:nth-child(2) {
  transform: translate(10%, -30%);
}
.calendar_card:nth-child(3) {
  transform: translate(100%, -60%);
}

.day {
  font-size: 2.5em;
  line-height: 1.5em;
}
.month {
  font-size: 1.1em;
  line-height: 1.1em;
  color: gray;
}
.location {
  font-size: 1.4em;
  line-height: 1.5em;
}
hr {
  width: 100%;
} */
</style>
