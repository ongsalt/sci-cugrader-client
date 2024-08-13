<script lang="ts">
    import { loginWithCookie } from "$lib/auth";

    let cookie = "";
    let accessToken = "";

    function login() {
        loginWithCookie(cookie, accessToken);
    }
</script>

<div class="p-6 flex items-center justify-center flex-1">
    <main class="bg-background border rounded-md p-4 max-w-md space-y-4">
        <div>
            <h1 class="text-xl font-medium">Sign in</h1>
            <p class="mt-2">
                They dont want me to fuck with their OAuth redirect so please
                login to the original website then copy its cookie
                <code class="bg-muted p-1 rounded-sm">document.cookie</code>
                and paste it below
            </p>
            <p class="mt-2">
                Access token
                <code class="bg-muted p-1 rounded-sm">access_token_cookie</code>
                is http only cookie so you need to find it in Application>Cookies
                tab in the devtools
            </p>
        </div>
        <!-- <button class="border rounded-md py-2 px-4 bg-background"> Sign in with google </button> -->
        <textarea
            name=""
            id=""
            class="block w-full h-36 border rounded-md p-2"
            bind:value={cookie}
            placeholder="Cookies"
        ></textarea>
        <input
            type="text"
            placeholder="Access token"
            class="border rounded-md p-2 w-full"
            bind:value={accessToken}
        />
        <button
            class="border rounded-md py-2 px-4 bg-primary hover:bg-primary-600 text-white"
            on:click={login}
        >
            Done
        </button>
    </main>
</div>
