import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";
import store from "@/store";

Vue.use(IonicVueRouter);

// Routes
const routes = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
    name: "home",
    meta: {
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
    name: "login",
    meta: {
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      menu: {
        hide: true
      }
    },
    beforeEnter(to, from, next) {
      return Vue.prototype.$fireAuth
        .signOut()
        .then(() => next({ name: "home" }));
    }
  },
  {
    path: "/matches",
    component: () => import("@/views/matches/index.vue"),
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        hide: false,
        icon: "c-songmates",
        priority: 1,
        title: "Matches"
      }
    },
    children: [
      {
        path: "",
        component: () => import("@/views/matches/matches.vue"),
        name: "matches",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 0,
            title: "Matches"
          }
        }
      },
      {
        path: "cleared",
        component: () => import("@/views/matches/cleared.vue"),
        name: "matches.cleared",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: false,
            icon: "close-circle-outline",
            priority: 1,
            title: "Cleared Matches"
          }
        }
      },
      {
        path: "onboarding",
        component: () => import("@/views/matches/onboarding.vue"),
        name: "matches.onboarding",
        meta: {
          authRequired: true,
          menu: {
            hide: true
          }
        }
      },
      {
        path: "settings",
        name: "matches.settings",
        meta: {
          authRequired: true,
          menu: {
            hide: false,
            icon: "search-outline",
            priority: 2,
            title: "Seeking Settings"
          }
        },
        redirect: { name: "profile.settings.seeking" }
      }
    ]
  },
  {
    path: "/demo_messages",
    name: "demo_messages",
    component: () => import("@/views/messages/demo/messages.vue"),
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        hide: true,
        icon: "c-messages",
        priority: 2,
        title: "Messages"
      }
    }
  },
  {
    path: "/demo_beforemessages",
    name: "demo_beforemessages",
    component: () => import("@/views/messages/demo/beforeMessage.vue"),
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_mixtape",
    name: "demo_mixtape",
    component: () => import("@/views/messages/demo/mixTape.vue"),
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_buildmixtape",
    name: "demo_buildmixtape",
    component: () => import("@/views/messages/demo/buildMixtape.vue"),
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_matches",
    component: () => import("@/views/matches/demo/matches.vue"),
    name: "demo_matches",
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_songmates",
    component: () => import("@/views/slidemenu/demo_songmates.vue"),
    name: "demo_songmates",
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_ejected",
    component: () => import("@/views/slidemenu/demo_ejected.vue"),
    name: "demo_ejected",
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_settings",
    component: () => import("@/views/slidemenu/demo_settings.vue"),
    name: "demo_settings",
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_helpdesk",
    component: () => import("@/views/slidemenu/demo_helpdesk.vue"),
    name: "demo_helpdesk",
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_about",
    component: () => import("@/views/slidemenu/demo_about.vue"),
    name: "demo_about",
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/demo_terms",
    component: () => import("@/views/slidemenu/demo_terms.vue"),
    name: "demo_terms",
    meta: {
      authRequired: true,
      menu: {
        hide: true
      }
    }
  },
  {
    path: "/messages",
    component: () => import("@/views/messages/index.vue"),
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        hide: false,
        icon: "c-messages",
        priority: 2,
        title: "Messages"
      }
    },
    children: [
      {
        path: "",
        component: () => import("@/views/messages/messages.vue"),
        name: "messages",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 0,
            title: "Messages"
          }
        }
      },
      {
        path: "archived",
        component: () => import("@/views/messages/archived.vue"),
        name: "messages.archived",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: false,
            icon: "archive",
            priority: 1,
            title: "Archived Messages"
          }
        }
      },
      {
        path: "conversation",
        component: () => import("@/views/messages/conversation.vue"),
        name: "messages.conversation",
        meta: {
          authRequired: true,
          menu: {
            hide: true
          }
        }
      },
      {
        path: "requests",
        component: () => import("@/views/messages/requests.vue"),
        name: "messages.requests",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 1,
            title: "Requests"
          }
        }
      }
    ]
  },
  {
    path: "/profile",
    component: () => import("@/views/profile/index.vue"),
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        title: "Profile",
        icon: "person-circle",
        hide: true,
        priority: 3
      }
    },
    children: [
      {
        path: "",
        component: () => import("@/views/profile/profile.vue"),
        name: "profile",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            title: "My Profile",
            hide: true,
            priority: 0
          }
        }
      },
      {
        path: "mixtapes",
        component: () => import("@/views/profile/mixtapes.vue"),
        name: "profile.mixtapes",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            title: "My Mixtapes",
            hide: true,
            priority: 2
          }
        }
      },
      {
        path: "subscriptions",
        component: () => import("@/views/subscription/details.vue"),
        name: "subscription.details",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            title: "My Subscriptions",
            hide: true,
            priority: 2
          }
        }
      },
      {
        path: "settings",
        component: () => import("@/views/profile/settings/index.vue"),
        name: "profile.settings",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            exact: false,
            hide: true,
            priority: 6,
            title: "My Settings"
          }
        },
        redirect: { name: "profile.settings.info" },
        children: [
          // {
          //   path: "account",
          //   component: () => import("@/views/profile/settings/account.vue"),
          //   name: "profile.settings.account",
          //   meta: {
          //     authRequired: true,
          //     layout: "navigator",
          //     menu: {
          //       title: "Account",
          //       icon: "key-outline",
          //       hide: false,
          //       priority: 3
          //     }
          //   }
          // },
          {
            path: "info",
            component: () => import("@/views/profile/settings/info.vue"),
            name: "profile.settings.info",
            meta: {
              authRequired: true,
              layout: "navigator",
              menu: {
                title: "Profile",
                icon: "person-circle-outline",
                hide: false,
                priority: 0
              }
            }
          },
          {
            path: "privacy",
            component: () => import("@/views/profile/settings/privacy.vue"),
            name: "profile.settings.privacy",
            meta: {
              authRequired: true,
              layout: "navigator",
              menu: {
                title: "Privacy",
                icon: "lock-closed-outline",
                hide: false,
                priority: 2
              }
            }
          },
          {
            path: "seeking",
            component: () => import("@/views/profile/settings/seeking.vue"),
            name: "profile.settings.seeking",
            meta: {
              authRequired: true,
              layout: "navigator",
              menu: {
                title: "Seeking",
                icon: "search-outline",
                hide: false,
                priority: 1
              }
            }
          }
        ]
      },
      {
        path: "matches",
        component: () => import("@/views/profile/matches.vue"),
        name: "profile.matches",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            title: "My Matches",
            hide: true,
            priority: 2
          }
        }
      }
    ]
  },
  {
    path: "/subscription",
    component: () => import("@/views/subscription/index.vue"),
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        title: "Subscription",
        icon: "c-songstory",
        hide: true,
        priority: 1
      }
    },
    children: [
      {
        path: "",
        component: () => import("@/views/subscription/subscription.vue"),
        name: "subscription",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 0,
            title: "Subscription"
          }
        }
      },
      {
        path: "payment",
        component: () => import("@/views/subscription/payment.vue"),
        name: "subscription_payment",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 0
          }
        }
      },
      {
        path: "complete",
        component: () => import("@/views/subscription/complete.vue"),
        name: "subscription_complete",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 0
          }
        }
      },
      {
        path: "details",
        component: () => import("@/views/subscription/details.vue"),
        name: "subscription_details",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 0
          }
        }
      }
    ]
  },
  {
    path: "/signup",
    component: () => import("@/views/signup/index.vue"),
    meta: {
      menu: {
        hide: true
      }
    },
    children: [
      {
        path: "",
        component: () => import("@/views/signup/signup.vue"),
        name: "signup"
      },
      {
        path: "artists",
        component: () => import("@/views/signup/artists.vue"),
        name: "signup.artists",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "gender",
        component: () => import("@/views/signup/gender.vue"),
        name: "signup.gender",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "express-new",
        component: () => import("@/views/signup/express-new.vue"),
        name: "signup.express_new",
        meta: {
          authRequired: false
        }
      },
      {
        path: "gender-new",
        component: () => import("@/views/signup/gender-new.vue"),
        name: "signup.gender_new",
        meta: {
          authRequired: false
        }
      },
      {
        path: "genres",
        component: () => import("@/views/signup/genres.vue"),
        name: "signup.genres",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "privacy",
        component: () => import("@/views/signup/privacy.vue"),
        name: "signup.privacy",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "profile",
        component: () => import("@/views/signup/profile.vue"),
        name: "signup.profile",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "seeking",
        component: () => import("@/views/signup/seeking.vue"),
        name: "signup.seeking",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "songs",
        component: () => import("@/views/signup/songs.vue"),
        name: "signup.songs",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "terms",
        component: () => import("@/views/signup/terms.vue"),
        name: "signup.terms",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "verify",
        component: () => import("@/views/signup/verify.vue"),
        name: "signup.verify",
        meta: {
          // authRequired: true
        }
      },
      {
        path: "soundcheck-subscribe",
        component: () => import("@/views/signup/soundcheck/subscribe.vue"),
        name: "signup.soundcheck-subscribe",
        meta: {
          authRequired: false,
          menu: {
            title: "Soundcheck - Subscribe",
            icon: "c-songstory",
            hide: false,
            priority: 1
          }
        }
      },
      {
        path: "soundcheck-now-playing",
        component: () => import("@/views/signup/soundcheck/now-playing.vue"),
        name: "signup.soundcheck-now-playing",
        meta: {
          authRequired: false,
          menu: {
            title: "Soundcheck - Now Playing",
            icon: "c-songstory",
            hide: false,
            priority: 1
          }
        }
      },
      {
        path: "soundcheck-discography",
        component: () => import("@/views/signup/soundcheck/discography.vue"),
        name: "signup.soundcheck-discography",
        meta: {
          authRequired: false,
          menu: {
            title: "Soundcheck - Discography",
            icon: "c-songstory",
            hide: false,
            priority: 1
          }
        }
      },
      {
        path: "soundcheck-genres",
        component: () => import("@/views/signup/soundcheck/genres.vue"),
        name: "signup.soundcheck-genres",
        meta: {
          authRequired: false,
          menu: {
            title: "Soundcheck - Genres",
            icon: "c-songstory",
            hide: false,
            priority: 1
          }
        }
      }
    ]
  },
  {
    path: "/songstory",
    component: () => import("@/views/songstory/index.vue"),
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        hide: false,
        icon: "c-songstory",
        priority: 0,
        title: "SongStory"
      }
    },
    children: [
      {
        path: "",
        component: () => import("@/views/songstory/songstory.vue"),
        name: "songstory",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 0,
            title: "SongStory"
          }
        }
      },
      {
        path: "nowplaying",
        component: () => import("@/views/songstory/nowplaying.vue"),
        name: "nowplaying",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - Now Playing"
          }
        }
      },
      {
        path: "nowplaying-visitor",
        component: () => import("@/views/songstory/nowplaying-visitor.vue"),
        name: "nowplaying-visitor",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - Now Playing Visitor"
          }
        }
      },
      {
        path: "discography",
        component: () => import("@/views/songstory/discography.vue"),
        name: "discography",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - Now Playing"
          }
        }
      },
      {
        path: "discography-visitor",
        component: () => import("@/views/songstory/discography-visitor.vue"),
        name: "discography-visitor",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - Discography Visitor"
          }
        }
      },
      {
        path: "discography-preview",
        component: () => import("@/views/songstory/discography-preview.vue"),
        name: "discography.preview",
        meta: {
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - Discography Preview"
          }
        }
      },
      {
        path: "nowplayingsong",
        component: () => import("@/views/songstory/nowplayingsong.vue"),
        name: "nowplayingsong",
        meta: {
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - Now Playing Song"
          }
        }
      },
      {
        path: "nowplaying-preview",
        component: () => import("@/views/songstory/nowplaying-preview.vue"),
        name: "nowplaying.preview",
        meta: {
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - Song Preview"
          }
        }
      },
      {
        path: "viewanswer-visitor",
        component: () => import("@/views/songstory/viewanswer-visitor.vue"),
        name: "viewanswer-visitor",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - View Answer Visitor"
          }
        }
      },
      {
        path: "viewanswer-personal",
        component: () => import("@/views/songstory/viewanswer-personal.vue"),
        name: "viewanswer-personal",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory - View Answer Personal"
          }
        }
      },
      {
        path: ":id",
        component: () => import("@/views/songstory/question.vue"),
        name: "songstory.question",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            title: "SongStory"
          }
        }
      },
      {
        path: "submit",
        component: () => import("@/views/songstory/submit.vue"),
        name: "songstory.submit",
        meta: {
          authRequired: true,
          layout: "navigator",
          menu: {
            hide: true,
            priority: 1,
            title: "Submit Question"
          }
        }
      }
    ]
  },
  {
    path: "/profile-visitor",
    component: () => import("@/views/songstory/profile-visitor.vue"),
    name: "profile-visitor",
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        title: "Profile Visitor",
        hide: true
      }
    }
  },
  {
    path: "/new-profile",
    component: () => import("@/views/songstory/new-profile.vue"),
    name: "new-profile",
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        title: "New Profile",
        hide: true
      }
    }
  },
  {
    path: "/profile-view",
    component: () => import("@/views/songstory/profile-view.vue"),
    name: "profile-view",
    meta: {
      authRequired: true,
      layout: "navigator",
      menu: {
        title: "View Profile",
        hide: true
      }
    }
  }
];

const router = new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    return await store
      .dispatch("User/getCurrentUser")
      .then(user => {
        if (user === null) {
          next({
            name: "login",
            query: { redirect: to.fullPath }
          });
        } else {
          // Get user data
          return store
            .dispatch("User/getUserData")
            .then(() => {
              let userData = store.getters["User/userData"];

              // Check if setup is complete
              if (userData.setup.complete == false) {
                if (userData.setup.next !== to.name) {
                  if (userData.setup.completed.indexOf(to.name) === -1) {
                    // If the page isn't in setup.completed, redirect to setup.next
                    next({ name: userData.setup.next, replace: true });
                  } else {
                    // Page is in the setup, can proceed
                    next();
                  }
                } else {
                  next();
                }
              }

              // Setup is complete, carry on
              else {
                next();
              }
            })
            .catch(() =>
              next({
                name: "login",
                query: { redirect: to.fullPath }
              })
            );
        }
      })
      .catch(() =>
        next({
          name: "login",
          query: { redirect: to.fullPath }
        })
      );
  } else {
    next();
  }
});

export default router;
