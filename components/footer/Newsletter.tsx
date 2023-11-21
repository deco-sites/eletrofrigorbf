import { useSignal } from "@preact/signals";
import { invoke } from "$store/runtime.ts";
import type { JSX } from "preact";

export interface Form {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  content: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: Form;
  };
  layout?: {
    tiled?: boolean;
  };
}

function Newsletter(
  { content, layout = {} }: Props,
) {
  const { tiled = false } = layout;
  const loading = useSignal(false);

  return (
    <div
      class={`flex ${
        tiled
          ? "flex-col gap-4 lg:flex-row lg:w-full lg:justify-between"
          : "flex-col gap-4"
      }`}
    >
      <div id="mc_embed_shell">
        <div id="mc_embed_signup">
          <form
            action="https://eletrofrigor.us14.list-manage.com/subscribe/post?u=b2ed99d90f32a9514f549fc33&amp;id=9d7b138f6e&amp;f_id=00a1a7e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll" class="mb-4">
              <span class="font-medium text-lg">
                Fique por dentro das novidades
              </span>
            </div>

            <div class="mc-field-group mb-4">
              <label for="mce-FNAME" class="sr-only">
                Nome <span class="asterisk"></span>
              </label>
              <input
                type="text"
                name="FNAME"
                class="required flex-auto md:flex-none input input-bordered md:w-80 text-base-content"
                id="mce-FNAME"
                placeholder="Nome"
                required
                value=""
              />
            </div>

            <div class="mc-field-group mb-4">
              <label for="mce-EMAIL" class="sr-only">
                Endereço de e-mail <span class="asterisk"></span>
              </label>
              <input
                type="email"
                name="EMAIL"
                class="required flex-auto md:flex-none input input-bordered md:w-80 text-base-content"
                id="mce-EMAIL"
                required
                placeholder="Digite seu E-mail"
                value=""
              />
            </div>

            <div aria-hidden="true" style="position: absolute; left: -5000px;">
              {
                /* real people should not fill this in and expect good things - do
              not remove this or risk form bot signups */
              }
              <input
                type="text"
                name="b_b2ed99d90f32a9514f549fc33_9d7b138f6e"
                tabindex={-1}
                value=""
              />
            </div>

            <div class="optionalParent">
              <div class="flex justify-end">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="btn"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>

          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          >
          </script>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
