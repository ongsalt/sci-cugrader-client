<script lang="ts">
    import { goto } from "$app/navigation";
    import { loginWithCookie } from "$lib/auth";
    import { defineRoute } from "$lib/navigation";

    const exampleCookie =
        "mysession=44O744O7IOODu+ODvOODu+ODuyDjg7zjg7zjg7wg44O744O744O744O8IOODu+ODsOS4lueVjOaDhee3kgo=; csrf_access_token=a37ee142c-4080-7cc5-95a5-ae36e504bda5; email=6000000000@student.chula.ac.th; uid=6000000000; csrf_token=a37ee142c-4080-7546-b522-a320b36fc3c1; role=1; Name=Mr.%20Alfred%20Russel%20Wallace; Email=6000000000@student.chula.ac.th";
    const exampleJWTToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MCwianRpIjoiZWNkMTAwMDAtMjA4MC03ZTc5LTkxYTktMTkzN2ZjMWY0YzBmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJlbWFpbCI6IjYwMDAwMDAwMDBAc3R1ZGVudC5jaHVsYS5hYy50aCIsInVpZCI6IjYwMDAwMDAwMDAiLCJyb2xlIjoxfSwibmJmIjowLCJjc3JmIjoiZWNkMTAwMDAtNDA4MC03MTZhLWFjMjItMjcyYzMwOTQzMjMyIiwiZXhwIjoxMDAwMDAwMDAwMDAwfQ.brRn7CHsi7jfJbcvGDU2du1ssFKbfzgPX3C5a_D1WQk";

    let cookie = $state("");
    let accessToken = $state("");

    function login() {
        loginWithCookie(cookie, accessToken);
        goto("/", { invalidateAll: true })
    }

    $effect(() => {
        if (cookie.startsWith("'") && cookie.endsWith("'")) {
            cookie = cookie.slice(1, -1)
        }
    })

    defineRoute("Login")
</script>

<div class="p-6 flex items-center justify-center flex-1">
    <main class="bg-background border rounded-md p-4 max-w-md space-y-4">
        <div>
            <h1 class="text-xl font-medium">Sign in</h1>
            <p class="mt-2">
                Please login to the original website then copy its cookie by opening console and run
                <code class="bg-muted p-1 rounded-sm">document.cookie</code>
                and paste the result below
            </p>
            <p class="mt-2">
                Access token
                <code class="bg-muted p-1 rounded-sm">access_token_cookie</code>
                is http-only cookie so you need to get it from Application->Cookies
                tab in the devtools
            </p>
        </div>
        <!-- <button class="border rounded-md py-2 px-4 bg-background"> Sign in with google </button> -->
        <div>
            <label for="cookie">Cookie</label>
            <textarea
                id="cookie"
                class="block w-full h-36 border rounded-md p-2"
                bind:value={cookie}
                placeholder={exampleCookie}
            ></textarea>
        </div>
        <div>
            <label for="access_token">Access token</label>
            <input
                id="access_token"
                type="text"
                placeholder={exampleJWTToken}
                class="border rounded-md p-2 w-full"
                bind:value={accessToken}
            />
        </div>
        <button
            class="border rounded-md py-2 px-4 bg-primary hover:bg-primary-600 text-white"
            onclick={login}
        >
            Done
        </button>
    </main>
</div>
