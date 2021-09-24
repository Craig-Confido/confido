<template>
  <v-container fluid class="pa-0 ma-0">
    <section class="mx-4 mx-lg-16">
      <v-row class="text-left mt-4">
        <v-img
          :src="require('../static/images/talentVisual.png')"
          class="d-flex d-md-none mx-md-16"
          alt="image of people"
        />
        <v-col cols="12" sm="7" class="mt-md-16">
          <h1
            class="text-h3  text-md-h2 font-weight-bold"
            aria-label="Intro text"
          >
            Want to build products that make the world a better place?
          </h1>
          <h2 class="text-h5 my-8">
            Work with people who share your values, care about product and will
            help you accelerate your career.
          </h2>
          <v-row class="mt-12 mx-0">
            <v-btn
              class="mb-2 mb-sm-0 mr-4 btn--outlined font-weight-bold"
              outlined
              color="accent"
              rounded
              width="250"
              height="50"
              @click="$vuetify.goTo('#why')"
            >
              Why work with us?
            </v-btn>
            <v-btn
              class="mb-2 mb-sm-0 mr-4 btn--outlined font-weight-bold"
              outlined
              color="success"
              rounded
              width="250"
              height="50"
              @click="$vuetify.goTo('#process')"
            >
              Our process
            </v-btn>
            <v-btn
              class="btn--outlined font-weight-bold"
              outlined
              color="secondary"
              rounded
              width="250"
              height="50"
              @click="$vuetify.goTo('#roles')"
            >
              Live roles
            </v-btn>
          </v-row>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="5">
          <v-img
            :src="require('../static/images/talentVisual.png')"
            class="d-none d-md-flex mx-md-16"
            alt="image of people"
          />
        </v-col>
      </v-row>
    </section>
    <v-row
      class="mt-10 full-width-green py-8 white--text text-center"
      no-gutters
      align-content="center"
      justify="center"
      style="box-shadow: 0px 0px 70px rgba(46, 49, 174, 0.55);"
    >
      <v-col cols="6" sm="3" class="px-auto mx-auto">
        <v-icon class="text-h2 white--text mb-2">
          mdi-rocket-launch-outline
        </v-icon>
        <h1>Exclusive</h1>
        <h3>Startup relationships</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-auto mx-auto">
        <v-icon class="text-h2 white--text mb-2">
          mdi-account-group-outline
        </v-icon>
        <h1>3 candidate</h1>
        <h3>Limit per role</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-auto mx-auto mt-2 mt-md-none">
        <v-icon class="text-h2 white--text mb-2">
          mdi-clock-outline
        </v-icon>
        <h1>2 week</h1>
        <h3>Average interview process</h3>
      </v-col>
      <v-col cols="6" sm="3" class="px-auto mx-auto mt-2 mt-md-none">
        <v-icon class="text-h2 white--text mb-2">
          mdi-check-circle-outline
        </v-icon>
        <h1>98%</h1>
        <h3>Success rate</h3>
      </v-col>
    </v-row>
    <v-row class="d-none d-md-flex mx-0 mx-md-6 mx-lg-16 my-16" id="roles">
      <v-row class="mx-lg-1">
        <v-col cols="12">
          <h1>Open roles.</h1>
        </v-col>
        <v-col
          v-for="role in roles"
          :key="role._id"
          cols="12"
          md="4"
          style="overflow-x: scroll; overflow-y: hidden"
        >
          <LiveRoles :role="role" />
        </v-col>
      </v-row>
    </v-row>
    <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16 my-16">
      <v-col cols="12">
        <Logos />
      </v-col>
    </v-row>
    <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Talent.</h1>
      </v-col>
      <v-col cols="12" sm="6">
        <h2>
          We care about getting to know you as an individual and what makes you
          tick. Then, we connect you with a startup that aligns with your career
          goals and values.
        </h2>
      </v-col>
      <v-col cols="12" sm="6" class="text-right">
        <v-btn
          class="btn--outlined font-weight-bold mx-auto px-8 py-4"
          outlined
          color="secondary"
          rounded
          @click="$vuetify.goTo('#getInTouch')"
        >
          Get in touch
        </v-btn>
      </v-col>
    </v-row>
    <v-row id="why" class="mx-0 mx-md-6 mx-lg-16 my-0">
      <v-col cols="12">
        <v-card class="pa-8 my-0 white--text text-left card-shadow">
          <v-card-title class="headline font-weight-bold primary--text">
            Why work with Confido?
          </v-card-title>
          <v-card-text class="text-h6 primary--text">
            We ensure our clients are committed to making the right hires, with
            efficient interview processes, detailed feedback and 24-hour
            turnaround on decisions.
          </v-card-text>
          <v-row class="primary--text mx-auto text-center mt-4">
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-account-group
              </v-icon>
              <h1 class="text-h5 text-md-h4">
                3 candidate
              </h1>
              <h3 class="text-md-h6">
                limit per role
              </h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-clock-check-outline
              </v-icon>
              <h1 class="text-h5 text-md-h4">
                2 week total
              </h1>
              <h3 class="text-md-h6">
                completed interview process
              </h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-charity
              </v-icon>
              <h1 class="text-h5 text-md-h4">
                Exclusive
              </h1>
              <h3 class="text-md-h6">
                client relationships
              </h3>
            </v-col>
            <v-col cols="6" sm="3">
              <v-icon class="secondary--text ml-4 text-h2">
                mdi-account-voice
              </v-icon>
              <h1 class="text-h5 text-md-h4">
                Feedback
              </h1>
              <h3 class="text-md-h6">
                guaranteed
              </h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 my-0 py-0 white--text" no-gutters>
      <v-carousel
        cycle
        continuous
        class="mx-0"
        hide-delimiter-background
        hide-delimiters
        light
        :show-arrows-on-hover="true"
      >
        <v-carousel-item
          v-for="(quote, index) in quotes"
          :key="index"
          class="px-0 mx-0 px-md-16 mx-md-16"
        >
          <v-sheet color="transparent" height="100%" class="px-0 px-md-16 py-0">
            <v-row
              class="fill-height px-4 px-0 mx-6 mx-lg-16"
              align="center"
              justify="center"
            >
              <p class="text-md-h6 text-md-h5 mt-md-16 my-0 py-0 text--primary">
                <strong class="quote">
                  {{ quote.content }}
                </strong>
              </p>
              <v-row
                class="text-md-h5 mt-12 mb-8 mx-auto"
                align="center"
                justify="center"
              >
                <v-spacer />
                <v-col cols="6" md="4">
                  <v-img
                    :src="`${quote.image}`"
                    width="100"
                    height="auto"
                    class="float-right"
                    eager
                  />
                </v-col>
                <v-col cols="6" md="8">
                  <p class="secondary--text text-left">
                    <strong>
                      {{ quote.advocate }}
                    </strong>
                  </p>
                </v-col>
                <v-spacer />
              </v-row>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row id="process" class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <ColorWideCard
          v-for="(card, index_2) in cards"
          :key="index_2"
          :card="card"
        />
      </v-col>
    </v-row>
    <v-row class="text-left mt-8 mt-md-0 mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <h1>Roles we cover.</h1>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12" md="6">
        <v-card
          color="white"
          class="px-8 py-4 my-2 primary--text text-center card-shadow"
        >
          <h2 class="headline text-center my-4 font-weight-bold">
            <v-icon color="secondary" class="mr-2">
              mdi-lightbulb
            </v-icon>
            Product.
          </h2>
          <v-divider />
          <v-card-text class="text-h6 primary--text text-center">
            <p>
              CPO | Product Co-founder
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              VP | Head of Product
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              Head of Design | Head of UX
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              Service Designer | Product Manager
            </p>
            <h1 class="accent--text mb-3">
              •
            </h1>
            <p>
              UX Designer | Product Designer | UI Designer
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          color="white"
          class="px-8 py-4 my-2 primary--text text-center card-shadow"
        >
          <h2 class="headline text-center my-4 font-weight-bold">
            <v-icon color="secondary" class="mr-2">
              mdi-cog
            </v-icon>
            Tech.
          </h2>
          <v-divider />
          <v-card-text class="text-h6 primary--text text-center">
            <p>
              CTO | Tech Co-founder
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              VP | Head of Engineering
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              Engineering Manager | Team Lead | Tech Lead
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              Frontend | Backend | Full Stack Engineer
            </p>
            <h1 class="success--text mb-3">
              •
            </h1>
            <p>
              QA | Platform Engineer | Data Scientist
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 mx-md-6 mx-lg-16">
      <v-col cols="12">
        <v-card
          color="accent"
          class="pa-8 my-2 white--text text-left card-shadow"
        >
          <v-card-title class="headline font-weight-bold">
            Values we look for.
          </v-card-title>
          <v-card-text class="text-md-h6 white--text">
            <v-row>
              <v-col cols="12" md="6">
                <p>
                  <v-icon class="mr-4 white--text">
                    mdi-check-circle-outline
                  </v-icon>
                  Relentless focus on delivering value.
                </p>
                <p>
                  <v-icon class="mr-4 white--text">
                    mdi-charity
                  </v-icon>
                  Committed to the team and mission.
                </p>
                <p>
                  <v-icon class="mr-4 white--text">
                    mdi-lightbulb
                  </v-icon>
                  Focus on quality and best practice.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <p>
                  <v-icon class="mr-4 white--text">
                    mdi-book-open-variant
                  </v-icon>
                  Driven by the need to keep learning and improving.
                </p>
                <p>
                  <v-icon class="mr-4 white--text">
                    mdi-account-group-outline
                  </v-icon>
                  Appreciation for others and the role they play.
                </p>
                <p>
                  <v-icon class="mr-4 white--text">
                    mdi-earth
                  </v-icon>
                  Passion for Tech for Good.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row id="getInTouch" class="mx-0 mx-md-6 mx-lg-16 mb-12">
      <v-col cols="12">
        <GetInTouch :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logos from "../components/Logos";
import GetInTouch from "../components/GetInTouch";
import ColorWideCard from "../components/ColorWideCard";

let title = "Work with people who share your values and build better tech",
  desc =
    "We’ll connect you with a startup that alligns with your values so you can build products that make the world a better place. Get in touch to talk about Tech and Product roles.",
  url = "https://confidotalent.com/talent",
  image = "https://confidotalent.com/images/meta/talent.png";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn",
});

export default {
  scrollToTop: true,
  name: "Talent",
  head: {
    title: title,
    meta: [
      { hid: "description", name: "description", content: desc },

      { hid: "og:title", property: "og:title", content: title },
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:image", property: "og:image", content: image },
      { hid: "og:description", property: "og:description", content: desc },

      { property: "twitter:domain", content: url },
      { hid: "twitter:title", property: "twitter:title", content: title },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: desc,
      },
      { hid: "twitter:image", property: "twitter:image", content: image },
      { hid: "twitter:url", property: "twitter:url", content: url },
      { hid: "twitter:label1", property: "twitter:label1", content: title },
    ],
    link: [{ rel: "canonical", href: url }],
  },
  components: {
    Logos,
    GetInTouch,
    ColorWideCard,
  },
  data() {
    return {
      roles: {},
      contact: [],
      quotes: [
        {
          content:
            "Confido are one of the best recruiters I've worked with, showing a genuine interest in both the company and myself. They struck the perfect balance between staying on top of moving the process along, while never making me feel like I was being hassled, and got the entire process sorted within a couple of weeks. I'm looking forward to working with them again in the future.",
          advocate: "Leanne P. – Frontend Lead",
          image: "../images/people/leanne.png",
        },
        {
          content:
            "Confido spent the time to listen to my needs, and asked all the right questions in order to find out what exactly I was looking for. When it came time to interview, they were always there to give helpful pointers, and they were very engaged. I would definitely recommend Confido to anyone looking for a new job.",
          advocate: "Yusuf O. – Tech Lead",
          image: "../images/people/yusuf.png",
        },
        {
          content:
            "Confido are one of the most professional recruiters I have ever worked with. Unlike the typical service, they truly put my interests to being the highest priority. They took the time to really understand what my career goals were and tailored every future conversation to help me achieve my goals. What more can I say. highly recommended!",
          advocate: "Anzel L. – Platform Architect",
          image: "../images/people/anzel.png",
        },
        {
          content:
            "After having been laid off during the worst recession in living memory, I wasn't 100% sure what to do next. Confido called me as soon as they found out and discussed a few options with me. Within a week, Confido had found me my first consulting gig and made some useful introductions for future work too. I've known Confido for a couple of years now and I'd strongly recommend their services to anyone looking for their next gig in the startup world, or anyone hiring in the startup space.",
          advocate: "Danny B. – Fractional CTO",
          image: "../images/people/jacob.png",
        },
        {
          content:
            "Confido have been one of the best recruiters I've worked with and I have nothing but praise for them. Confido spent hours going through both the details of what I was looking for in the job market and the set of skills companies were looking for in ideal candidates. As well as discussing interview feedback and providing me with guidance. I would totally recommend Confido if you're either looking for a new job or a company looking to hire.",
          advocate: "Fernando F. – Senior Developer",
          image: "../images/people/fernando.png",
        },
        {
          content:
            "Confido made the whole searching process so much easier. From the beginning I could tell they really cared about my interests. They were open and clear and managed my expectations with each stage of the process. I couldn't recommend a recruiter more!",
          advocate: "Bella D. – Full Stack Engineer",
          image: "../images/people/bella.png",
        },
        {
          content:
            "I wasn’t looking to change roles when I was head hunted by Confido but can honestly say that if it wasn’t for the time and effort they put in explaining every detail about the role and company, I wouldn’t have applied.  The great communication and feedback continued through the multiple stage process and really helped me secure a fantastic new position at a great company.",
          advocate: "James F. – VP of Engineering",
          image: "../images/people/james.png",
        },
        {
          content:
            "I've recently been working with Confido on a Head of QA position; where he has seamlessly ensured that the process was smooth for both me, my family, and of course the hiring company. In fact; if you want results within days and not weeks; I highly recommend Confido as someone who will get the job done.",
          advocate: "Chris C. – Head of DevOps and QA",
          image: "../images/people/chris.png",
        },
        {
          content:
            "Confido ensured my journey through the recruitment process was not only smooth, but also pleasant and swift. Confido conducts themselves in a professional manner, both with candidates and employers, yet manages to build a level of rapport that you would expect from longer-term acquaintances. They always acted with my interests in mind and were quick to resolve any issues.",
          advocate: "Jacob K. – Frontend Chapter Lead",
          image: "../images/people/jacob.png",
        },
        {
          content:
            "I couldn't recommend Confido more. They have honestly been one of the best, if not the best recruiter I have worked with. They gave constant feedback, took lots of time to listen and really thought about what I wanted and needed and where would work well for me. I would definitely want to work with them again.",
          advocate: "Abi T. – Software Engineer",
          image: "../images/people/abi.png",
        },
        {
          content:
            "I'm pleased to say that in my time of need, Confido showed a great interest in my personal situation and took the time to walk me through the companies that they were working. My expectations were managed throughout, and I'm pleased to say that I've now secured a role at a company that resonates with my personal values regarding people and how they should be treated. I cannot recommend Confido enough. Out of all of the recruitment processes I've been through, this was the most effortless and I daresay enjoyable.",
          advocate: "Lou R. – Lead QA Engineer",
          image: "../images/people/lou.png",
        },
        {
          content:
            "Confido is the best business I've worked with when looking for new career opportunities. From initial contact through to receiving an offer, the experience was painless and I was treated with care and attention. I couldn't recommend Confido enough, whether you're a startup scaling and looking for top tier talent, or an individual looking for a business you can trust to find you the perfect role.",
          advocate: "Karl K. – Product Designer",
          image: "../images/people/karl.png",
        },
        {
          content:
            "Confido carefully explained the position on offer making sure it aligned with my ambitions. Their communication and feedback was excellent throughout the hiring process. Most importantly, they took the time understand my situation and provided invaluable advice to help me make my decision.",
          advocate: "Stu C. – Senior Product Manager",
          image: "../images/people/stu.png",
        },
        {
          content:
            "It was an absolute pleasure to work with Confido. They made the process of finding a new role as pain-free and relaxed as possible. They also take the time to get to know candidates; I felt that they really understood my personality, skills and career goals. I'm really excited about the next step in my career, and wouldn't have this new opportunity without Craig.",
          advocate: "Amyce A. – QA Automation Engineer",
          image: "../images/people/amyce.png",
        },
      ],
      titles: [
        {
          title: "Want to build products that make the world a better place?",
        },
        {
          title: "Looking for a startup that shares your values?",
        },
      ],
      tab: null,
      cards: [
        {
          color: "success",
          accentColor: "white",
          title: "Process.",
          tab1: "Discovery call",
          tab2: "Matching process",
          tab3: "Interview process",
          tab4: "Onboarding",
          icon1: "mdi-phone-in-talk",
          icon2: "mdi-magnify",
          icon3: "mdi-account-voice",
          icon4: "mdi-account-group",
          text1:
            "We'll spend 30-40 minutes to understand what motivates you, what you enjoy doing and how you want to progress your career.",
          text2:
            "Following the discovery call, we'll share startups that meet your criteria, that share your values and will help you advance your career.",
          text3:
            "Our interview processes have a maximum of three stages that will be completed within two weeks, with detailed interview feedback.",
          text4:
            "We'll support you from offer to onboarding to ensure a seamless start with your new employer.",
        },
      ],
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    async getRoles() {
      this.error = this.role = null;
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "roles",
          },
          props: "_id,slug,title,content,metadata,created_at,modified_at",
          sort: "-created_at",
        })
        .then((data) => {
          const roles = data.objects;
          this.loading = false;
          this.roles = roles;
        });
    },
  },
};
</script>
