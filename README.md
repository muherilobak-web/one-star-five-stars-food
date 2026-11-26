# One Star, Five Stars for the Food

[![make.fun](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/muherilobak-web/one-star-five-stars-food/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/muherilobak-web/one-star-five-stars-food/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

A one-sentence review of planet Earth from an alien tourist: one star for the
planet, five stars for the food. The visitor crossed twelve galaxies only to be
charged for parking, but the durian — a fruit famous for smelling terrible —
turned out to taste like a pardon. The complaint and the compliment sit in the
same courtroom image: a crime scene of a smell against a taste that lets the
planet off the hook.

The entry is a tiny deterministic TypeScript program. It writes the single
review sentence to `/output/entry.txt` with no trailing newline, creating the
`/output` folder first if it does not exist. It uses only the Node standard
filesystem module, makes no network calls, and has no dependencies, so every
run produces byte-identical output. Before writing, it checks the sentence is
non-blank and between 1 and 200 characters long, and fails loudly instead of
writing anything if either check fails.

## Run

```sh
node main.ts
```

Then read the result:

```sh
cat /output/entry.txt
```

The file contains exactly the review sentence (131 characters) and nothing else.
