<template>
  <div class="grid w-full bg-gray-900 grid-cols-6 gap-5 px-5 py-12 h-full">
    <div></div>
    <form @submit.prevent="onCnx" class="col-span-2 mt-10">
      <div class="flex flex-col gap-10 bg-gray-800 p-5">
        <h2 class="self-center text-white text-xl uppercase">Se connecter</h2>
        <div class="flex flex-col gap-4">
          <span class="text-white">Email</span
          ><input
            type="email"
            v-model="user.email"
            placeholder="Adresse email"
            class="h-10 bg-gray-200 pl-1"
            required
          />
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-white">Mot de passe</span>
          <div class="relative">
            <input
              :type="type"
              v-model="user.password"
              placeholder="Mot de passe"
              class="h-10 bg-gray-200 pl-1 relative w-full"
              required
            />
            <button @click.prevent="affiche()">
              <EyeIcon class="w-6 h-6 absolute top-2 right-2" />
            </button>
          </div>
        </div>
        <div class="flex justify-between gap-3">
          <button type="submit" class="text-white bg-indigo-700 p-2 w-full">
            Connexion
          </button>
          <button
            type="button"
            class="text-white bg-indigo-700 p-2 w-full"
            @click="onDcnx()"
          >
            Déconnexion
          </button>
        </div>
        <div
          class="
            w-full
            bg-red-300
            text-gray-800
            h-10
            flex
            justify-center
            items-center
          "
          role="alert"
        >
          {{ message }}
        </div>
      </div>
    </form>
    <form class="col-span-2 mt-10">
      <div class="flex flex-col gap-4 bg-gray-800 p-5">
        <h2 class="self-center text-white text-xl uppercase">S'inscrire</h2>
        <div class="flex flex-row gap-4 justify-between">
          <div class="flex flex-col gap-2 w-full">
            <span class="text-white">Nom</span
            ><input
              type="text"
              placeholder="Nom"
              class="h-10 bg-gray-200 pl-1"
              required
            />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <span class="text-white">Prénom</span
            ><input
              type="text"
              placeholder="Prénom"
              class="h-10 bg-gray-200 pl-1"
              required
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-white">Nom d'utilisateur</span
          ><input
            type="text"
            placeholder="Nom d'utilisateur"
            class="h-10 bg-gray-200 pl-1"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-white">Email</span
          ><input
            type="email"
            placeholder="Adresse email"
            class="h-10 bg-gray-200 pl-1"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-white">Mot de passe</span>
          <div class="relative">
            <input
              placeholder="Mot de passe"
              class="h-10 bg-gray-200 pl-1 relative w-full"
              required
            />
            <button>
              <EyeIcon class="w-6 h-6 absolute top-2 right-2" />
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-indigo-700 p-2 w-1/2 mx-auto"
        >
          S'inscrire
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../main.js";

import Card from "../components/Card.vue";
import { EyeIcon } from "@heroicons/vue/outline";

export default {
  name: "Connect",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: null,
      view: false,
      type: "password",
      imageData: null,
    };
  },
  components: { Card, EyeIcon },
  mounted() {
    this.getUserConnect();

    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          // console.log("user", this.user);

          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur de connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            password: null,
          };
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur de deconnexion", error);
        });
    },
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.message = "User connecté";
          }
        }.bind(this)
      );
    },
  },
};
</script>
