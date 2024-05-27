'use client';

import { cn } from '@repo/utils';
import Image from 'next/image';
import type { FC } from 'react';
import { useCommunity } from '../../app/community/provider';

export const NavSide: FC = () => {
  const { activeSegment, setActiveSegment } = useCommunity();

  return (
    <div className="w-[200px] hidden lg:block sticky self-start top-28">
      <div className="w-40 pb-6 mb-6 border-b border-b-zinc-300 dark:border-b-slate-700">
        {[
          { label: '⭐  Support', href: '#support' },
          { label: '🎪  Events & streams', href: '#events-streams' },
          { label: '⚡️  Brand & resources', href: '#brand-resources' },
          { label: '🌎  Maintainer team', href: '#maintainer-team' },
          { label: '🛠  Contribute', href: '#contribute' },
          { label: '💅  Sponsor', href: '#sponsor' },
        ].map(({ label, href }) => {
          // Remove # from href
          const hrefWithoutHash = href.slice(1);
          const isActive = activeSegment === hrefWithoutHash;

          return (
            <a
              className={cn(
                'h-10 flex items-center',
                isActive && 'text-blue-500',
              )}
              href={href}
              key={href}
              onClick={() =>
                setTimeout(() => {
                  setActiveSegment(hrefWithoutHash);
                }, 10)
              }
            >
              <span>{label}</span>
            </a>
          );
        })}
      </div>
      <div className="mb-4 text-sm text-zinc-500 dark:text-slate-400">
        Get a README badge
      </div>
      <a
        className="border border-dashed border-purple-400 w-28 rounded flex items-center justify-center bg-purple-100 h-[50px]"
        href="https://github.com/storybookjs/brand/tree/master/badge"
        rel="noreferrer"
        target="_blank"
      >
        <Image
          alt="Storybook badge"
          height={20}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODIiIGhlaWdodD0iMjAiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNLjQzNDE5NTQ4IDEyLjkwMDUzNjVMLjAwMDUwNDA3IDEuMzQ0NjI0NzJDLS4wMTM4MTkwNi45NjI5NzgyOS4yNzg4MTM3Ny42Mzk1MzczOC42NTk5ODUxMi42MTU3MTQxN0wxMC40ODkwOTc1LjAwMTM5NDY0Yy4zODc5ODctLjAyNDI0OTE4LjcyMjE3MDQuMjcwNjE4NTQuNzQ2NDE5Ni42NTg2MDU0OWEuNzAzODk1My43MDM4OTUzIDAgMCAxIC4wMDEzNzA3LjA0MzkwNzAzVjEzLjI5NjExNjdjMCAuMzg4NzQ0LS4zMTUxMzkyLjcwMzg4MzMtLjcwMzg4MzIuNzAzODgzM2EuNzAzNzU0MTYuNzAzNzU0MTYgMCAwIDEtLjAzMTU4MTgtLjAwMDcwODlsLTkuMzk1NDIxMDQtLjQyMTk3ODNjLS4zNjU5MTQ0OS0uMDE2NDM0My0uNjU4MDY5NC0uMzEwNzUwNy0uNjcxODA2MjgtLjY3Njc3NjN6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjgyIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMkEwNDgxIiByeD0iMyIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNC45MTQ0IDEzLjgzODIyMWMtLjYwNTg2OTcgMC0xLjE4OTAxMDUtLjA4MDI2NTktMS43NDk0NC0uMjQwOC0uNTYwNDI5NS0uMTYwNTM0MS0xLjAyNjE4NDgtLjM4MjY2NTItMS4zOTcyOC0uNjY2NGwuNTY4LTEuMjQzMmMuNzcyNDgzOS41MzAxMzU5OCAxLjYzOTYyMTkuNzk1MiAyLjYwMTQ0Ljc5NTIuNDk5ODQyNSAwIC44ODQxODUzLS4wODAyNjU4NiAxLjE1MzA0LS4yNDA4LjI2ODg1NDctLjE2MDUzNDE0LjQwMzI4LS4zODI2NjUyNS40MDMyOC0uNjY2NCAwLS4yNTM4Njc5NC0uMTIzMDY1NC0uNDUxNzMyNjItLjM2OTItLjU5MzYtLjI0NjEzNDYtLjE0MTg2NzM4LS42ODM0OTAyLS4yNzk5OTkzMy0xLjMxMjA4LS40MTQ0LS43MDQzMjM1LS4xNDE4NjczOC0xLjI2NjYzNzktLjMxMzU5ODk5LTEuNjg2OTYtLjUxNTItLjQyMDMyMjEtLjIwMTYwMTAxLS43MjcwMzktLjQ0OTg2NTE5LS45MjAxNi0uNzQ0OHMtLjI4OTY4LS42NTg5MzExNy0uMjg5NjgtMS4wOTJjMC0uNDc3ODY5MDYuMTM0NDI1My0uOTAzNDY0OC40MDMyOC0xLjI3NjhzLjY0NTYyNDItLjY2NjM5ODk0IDEuMTMwMzItLjg3OTIgMS4wNDUxMTY4LS4zMTkyIDEuNjgxMjgtLjMxOTJjLjU2ODAwMjggMCAxLjExNTE3MDcuMDgyMTMyNTEgMS42NDE1Mi4yNDY0LjUyNjM0OTMuMTY0MjY3NDkuOTQ0NzcxOC4zODQ1MzE5NSAxLjI1NTI4LjY2MDhsLS41NjggMS4yNDMyYy0uNzM0NjE3LS41MzAxMzU5OC0xLjUwNzA4OTMtLjc5NTItMi4zMTc0NC0uNzk1Mi0uNDYxOTc1NiAwLS44MjU0OTIuMDg3NzMyNDYtMS4wOTA1Ni4yNjMyLS4yNjUwNjguMTc1NDY3NTQtLjM5NzYuNDE2MjY1MTQtLjM5NzYuNzIyNCAwIC4xNzkyMDA5LjA1MTExOTUuMzI2NjY2MDkuMTUzMzYuNDQyNHMuMjcyNjM4OC4yMTgzOTk1NS41MTEyLjMwOGMuMjM4NTYxMi4wODk2MDA0NS41Nzc0NjQ1LjE4MjkzMjg1IDEuMDE2NzIuMjggMS4wMjk5Nzg1LjIyNDAwMTEyIDEuNzcwMjY0NC41MTE0NjQ5MSAyLjIyMDg4Ljg2MjQuNDUwNjE1Ni4zNTA5MzUwOS42NzU5Mi44MzYyNjM1Ny42NzU5MiAxLjQ1NiAwIC43NDY2NzA0LS4yOTE1NzA0IDEuMzM0NjY0NS0uODc0NzIgMS43NjQtLjU4MzE0OTYuNDI5MzM1NS0xLjM5NzI3NDguNjQ0LTIuNDQyNC42NDR6bTcuNDI5NDQtMS4yNTQ0Yy4xNzQxODc1IDAgLjM1NTk0NTctLjAxMTE5OTg5LjU0NTI4LS4wMzM2bC0uMDkwODggMS4yMzJjLS4yMTk2Mjc4LjAyOTg2NjgtLjQzOTI1MjIuMDQ0OC0uNjU4ODguMDQ0OC0uODQ4MjE3NiAwLTEuNDY3MzMxNC0uMTgyOTMxNS0xLjg1NzM2LS41NDg4LS4zOTAwMjg2LS4zNjU4Njg1LS41ODUwNC0uOTIyMTI5Ni0uNTg1MDQtMS42Njg4di0yLjEwNTZoLTEuMDU2NDh2LTEuMjY1NmgxLjA1NjQ4di0xLjYxMjhoMS43MTUzNnYxLjYxMjhoMS4zOTcyOHYxLjI2NTZoLTEuMzk3Mjh2Mi4wOTQ0YzAgLjY1NzA2OTk1LjMxMDUwMzYuOTg1Ni45MzE1Mi45ODU2em0zLjk4NzM2IDEuMjQzMmMtLjU5MDcyMyAwLTEuMTA5NDkxMS0uMTE3NTk4OC0xLjU1NjMyLS4zNTI4LS40NDY4Mjg5LS4yMzUyMDEyLS43OTE0MTIxLS41Njc0NjQ1LTEuMDMzNzYtLjk5NjgtLjI0MjM0NzktLjQyOTMzNTQ4LS4zNjM1Mi0uOTM1MTk3MDktLjM2MzUyLTEuNTE3NiAwLS41ODI0MDI5MS4xMjExNzIxLTEuMDg4MjY0NTIuMzYzNTItMS41MTc2cy41ODY5MzExLS43NTk3MzIxOCAxLjAzMzc2LS45OTEyLjk2NTU5Ny0uMzQ3MiAxLjU1NjMyLS4zNDcyYy41OTA3MjMgMCAxLjEwOTQ5MTEuMTE1NzMyMTggMS41NTYzMi4zNDcyLjQ0NjgyODkuMjMxNDY3ODIuNzkxNDEyMS41NjE4NjQ1MiAxLjAzMzc2Ljk5MTIuMjQyMzQ3OS40MjkzMzU0OC4zNjM1Mi45MzUxOTcwOS4zNjM1MiAxLjUxNzYgMCAuNTgyNDAyOTEtLjEyMTE3MjEgMS4wODgyNjQ1Mi0uMzYzNTIgMS41MTc2LS4yNDIzNDc5LjQyOTMzNTUtLjU4NjkzMTEuNzYxNTk4OC0xLjAzMzc2Ljk5NjhzLS45NjU1OTcuMzUyOC0xLjU1NjMyLjM1Mjh6bTAtMS4yODhjLjgzMzA3MDggMCAxLjI0OTYtLjUyNjM5NDc0IDEuMjQ5Ni0xLjU3OTIgMC0uNTMwMTM1OTgtLjEwNzkxODktLjkyNTg2NTM2LS4zMjM3Ni0xLjE4NzItLjIxNTg0MTEtLjI2MTMzNDY0LS41MjQ0NTEzLS4zOTItLjkyNTg0LS4zOTItLjgzMzA3MDggMC0xLjI0OTYuNTI2Mzk0NzQtMS4yNDk2IDEuNTc5MnMuNDE2NTI5MiAxLjU3OTIgMS4yNDk2IDEuNTc5MnptNy43MDIwOC0zLjA0NjRsLS45NjU2LjEwMDhjLS40NzcxMjI0LjA0NDgwMDIyLS44MTQxMzIzLjE3NzMzMjIzLTEuMDExMDQuMzk3Ni0uMTk2OTA3Ny4yMjAyNjc3Ny0uMjk1MzYuNTEzMzMxNS0uMjk1MzYuODc5MnYyLjg2NzJoLTEuNzE1MzZ2LTUuNDk5MmgxLjY0NzJ2LjkyOTZjLjI4MDIxNDctLjYzNDY2OTg0Ljg1OTU2ODktLjk4MTg2NjM3IDEuNzM4MDgtMS4wNDE2bC40OTk4NC0uMDMzNi4xMDIyNCAxLjR6bTQuOTg0Mi0xLjI0MzJoMS42ODEyOGwtMy4zNjI1NiA3LjUwNGgtMS43MzgwOGwxLjA2Nzg0LTIuMzE4NC0yLjI5NDcyLTUuMTg1NmgxLjc4MzUybDEuNDA4NjQgMy40OTQ0IDEuNDU0MDgtMy40OTQ0em01LjY1NzI4LS4xNDU2Yy40ODQ2OTU4IDAgLjkxMjU4NDguMTE1NzMyMTggMS4yODM2OC4zNDcyLjM3MTA5NTIuMjMxNDY3ODIuNjYwNzcyMy41NjE4NjQ1Mi44NjkwNC45OTEyLjIwODI2NzcuNDI5MzM1NDguMzEyNC45Mjc3MzA1LjMxMjQgMS40OTUyIDAgLjU2NzQ2OTUtLjEwNDEzMjMgMS4wNjk1OTc4Mi0uMzEyNCAxLjUwNjQtLjIwODI2NzcuNDM2ODAyMi0uNDk5ODM4MS43NzY1MzIxLS44NzQ3MiAxLjAxOTItLjM3NDg4MTkuMjQyNjY3OS0uODAwODc3Ni4zNjQtMS4yNzguMzY0LS4zODYyNDE5IDAtLjczNDYxMTgtLjA4MDI2NTktMS4wNDUxMi0uMjQwOC0uMzEwNTA4Mi0uMTYwNTM0MS0uNTQ5MDY1OC0uMzgyNjY1Mi0uNzE1NjgtLjY2NjR2LjgxNzZoLTEuNjkyNjR2LTcuODk2aDEuNzE1MzZ2My4xMzZjLjE2NjYxNDItLjI3NjI2ODA1LjQwMzI3ODUtLjQ5MDkzMjU3LjcxLS42NDRzLjY0OTQxMTQtLjIyOTYgMS4wMjgwOC0uMjI5NnptLS40OTk4NCA0LjQzNTJjLjQwMTM4ODcgMCAuNzExODkyMi0uMTM5OTk4Ni45MzE1Mi0uNDIuMjE5NjI3OC0uMjgwMDAxNC4zMjk0NC0uNjczODY0MTMuMzI5NDQtMS4xODE2IDAtLjUwMDI2OTE3LS4xMDk4MTIyLS44ODI5MzIwMS0uMzI5NDQtMS4xNDgtLjIxOTYyNzgtLjI2NTA2Nzk5LS41MzAxMzEzLS4zOTc2LS45MzE1Mi0uMzk3Ni0uNDAxMzg4NyAwLS43MTE4OTIyLjEzNjI2NTMtLjkzMTUyLjQwODgtLjIxOTYyNzguMjcyNTM0Ny0uMzI5NDQuNjU4OTMwODMtLjMyOTQ0IDEuMTU5MiAwIC41MDc3MzU4Ny4xMDk4MTIyLjg5Nzg2NTMuMzI5NDQgMS4xNzA0LjIxOTYyNzguMjcyNTM0Ny41MzAxMzEzLjQwODguOTMxNTIuNDA4OHptNi42OTEwNCAxLjI4OGMtLjU5MDcyMyAwLTEuMTA5NDkxMS0uMTE3NTk4OC0xLjU1NjMyLS4zNTI4LS40NDY4Mjg5LS4yMzUyMDEyLS43OTE0MTIxLS41Njc0NjQ1LTEuMDMzNzYtLjk5NjgtLjI0MjM0NzktLjQyOTMzNTQ4LS4zNjM1Mi0uOTM1MTk3MDktLjM2MzUyLTEuNTE3NiAwLS41ODI0MDI5MS4xMjExNzIxLTEuMDg4MjY0NTIuMzYzNTItMS41MTc2cy41ODY5MzExLS43NTk3MzIxOCAxLjAzMzc2LS45OTEyLjk2NTU5Ny0uMzQ3MiAxLjU1NjMyLS4zNDcyYy41OTA3MjMgMCAxLjEwOTQ5MTEuMTE1NzMyMTggMS41NTYzMi4zNDcyLjQ0NjgyODkuMjMxNDY3ODIuNzkxNDEyMS41NjE4NjQ1MiAxLjAzMzc2Ljk5MTIuMjQyMzQ3OS40MjkzMzU0OC4zNjM1Mi45MzUxOTcwOS4zNjM1MiAxLjUxNzYgMCAuNTgyNDAyOTEtLjEyMTE3MjEgMS4wODgyNjQ1Mi0uMzYzNTIgMS41MTc2LS4yNDIzNDc5LjQyOTMzNTUtLjU4NjkzMTEuNzYxNTk4OC0xLjAzMzc2Ljk5NjhzLS45NjU1OTcuMzUyOC0xLjU1NjMyLjM1Mjh6bTAtMS4yODhjLjgzMzA3MDggMCAxLjI0OTYtLjUyNjM5NDc0IDEuMjQ5Ni0xLjU3OTIgMC0uNTMwMTM1OTgtLjEwNzkxODktLjkyNTg2NTM2LS4zMjM3Ni0xLjE4NzItLjIxNTg0MTEtLjI2MTMzNDY0LS41MjQ0NTEzLS4zOTItLjkyNTg0LS4zOTItLjgzMzA3MDggMC0xLjI0OTYuNTI2Mzk0NzQtMS4yNDk2IDEuNTc5MnMuNDE2NTI5MiAxLjU3OTIgMS4yNDk2IDEuNTc5MnptNi4zOTU2OCAxLjI4OGMtLjU5MDcyMyAwLTEuMTA5NDkxMS0uMTE3NTk4OC0xLjU1NjMyLS4zNTI4LS40NDY4Mjg5LS4yMzUyMDEyLS43OTE0MTIxLS41Njc0NjQ1LTEuMDMzNzYtLjk5NjgtLjI0MjM0NzktLjQyOTMzNTQ4LS4zNjM1Mi0uOTM1MTk3MDktLjM2MzUyLTEuNTE3NiAwLS41ODI0MDI5MS4xMjExNzIxLTEuMDg4MjY0NTIuMzYzNTItMS41MTc2cy41ODY5MzExLS43NTk3MzIxOCAxLjAzMzc2LS45OTEyLjk2NTU5Ny0uMzQ3MiAxLjU1NjMyLS4zNDcyYy41OTA3MjMgMCAxLjEwOTQ5MTEuMTE1NzMyMTggMS41NTYzMi4zNDcyLjQ0NjgyODkuMjMxNDY3ODIuNzkxNDEyMS41NjE4NjQ1MiAxLjAzMzc2Ljk5MTIuMjQyMzQ3OS40MjkzMzU0OC4zNjM1Mi45MzUxOTcwOS4zNjM1MiAxLjUxNzYgMCAuNTgyNDAyOTEtLjEyMTE3MjEgMS4wODgyNjQ1Mi0uMzYzNTIgMS41MTc2LS4yNDIzNDc5LjQyOTMzNTUtLjU4NjkzMTEuNzYxNTk4OC0xLjAzMzc2Ljk5NjhzLS45NjU1OTcuMzUyOC0xLjU1NjMyLjM1Mjh6bTAtMS4yODhjLjgzMzA3MDggMCAxLjI0OTYtLjUyNjM5NDc0IDEuMjQ5Ni0xLjU3OTIgMC0uNTMwMTM1OTgtLjEwNzkxODktLjkyNTg2NTM2LS4zMjM3Ni0xLjE4NzItLjIxNTg0MTEtLjI2MTMzNDY0LS41MjQ0NTEzLS4zOTItLjkyNTg0LS4zOTItLjgzMzA3MDggMC0xLjI0OTYuNTI2Mzk0NzQtMS4yNDk2IDEuNTc5MnMuNDE2NTI5MiAxLjU3OTIgMS4yNDk2IDEuNTc5MnpNNzcgMTMuNzM3NDIxaC0yLjEwMTZsLTIuMTM1NjgtMi40NTI4djIuNDUyOGgtMS43MTUzNnYtNy44OTZoMS43MTUzNnY0Ljc0ODhsMi4wNTYxNi0yLjM0MDhoMi4wNDQ4bC0yLjM0MDE2IDIuNjIwOEw3NyAxMy43Mzc0MjF6Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNiAyLjc1NjE3MSkiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iI0ZGNDc4NSIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTguMjk3NTkyODYgMS43MjA4MjMwMkw4LjM2NDczMTAyLjEwNjA1ODI4IDkuNzE0NTYzNzIgMGwuMDU4MTUxODQgMS42NjUyNTEwM2MuMDAyMDIzODIuMDU3OTU0NTgtLjA0MzMxNzAxLjEwNjU3NjY3LS4xMDEyNzE1OS4xMDg2MDA0OS0uMDI0ODE1NC4wMDA4NjY1Ny0uMDQ5MTM0OTQtLjAwNzA4OTI4LS4wNjg2NDAyLS4wMjI0NTQ4M2wtLjUyMDUzODg1LS40MTAwNjE5My0uNjE2MzA1MjkuNDY3NTA1MTRjLS4wNDYyMDEzNy4wMzUwNDY1Ni0uMTEyMDY1ODMuMDI2MDAzNzktLjE0NzExMjM5LS4wMjAxOTc1OC0uMDE0NzUyODYtLjAxOTQ0ODQ4LS4wMjIyNjg0NS0uMDQzNDI5NS0uMDIxMjU0MzgtLjA2NzgxOTN6TTYuNTcxMjg2MjUgNS4yNzY3OTE0OGMwIC4yNzM4NTE3NSAxLjg0NDYyODE5LjE0MjYwMTc1IDIuMDkyMjUzMjctLjA0OTc2MDIzIDAtMS44NjQ4NjUxMS0xLjAwMDY0Mjg3LTIuODQ0ODIyMzktMi44MzI5ODg4OS0yLjg0NDgyMjM5LTEuODMyMzQ2MDMgMC0yLjg1ODk3OTYyLjk5NTIwNDA2LTIuODU4OTc5NjIgMi40ODgwMTA5MSAwIDIuNTk5OTcxOTUgMy41MDg3NDc3MSAyLjY0OTczMjE4IDMuNTA4NzQ3NzEgNC4wNjc4OTg2OSAwIC4zOTgwODE4My0uMTk0OTMwNDMuNjM0NDQyOTItLjYyMzc3NzM3LjYzNDQ0MjkyLS41NTg4MDA1NiAwLS43Nzk3MjE3MS0uMjg1MzgzMjgtLjc1MzczMDk5LTEuMjU1NzA3NzQgMC0uMjEwNDk5MTgtMi4xMzEyMzkzNS0uMjc2MTI0MTgtMi4xOTYyMTYxNiAwLS4xNjU0NTc0MSAyLjM1MTQ0MTU2IDEuMjk5NTM2MTkgMy4wMjk2ODc0NiAyLjk3NTkzNzg3IDMuMDI5Njg3NDYgMS42MjQ0MjAyNCAwIDIuODk3OTY1NzEtLjg2NTg1NTYgMi44OTc5NjU3MS0yLjQzMzMwMjc1IDAtMi43ODY1NzI4LTMuNTYwNzI5MTYtMi43MTE5MzI0Ni0zLjU2MDcyOTE2LTQuMDkyNzc4OCAwLS41NTk4MDI1OC40MTU4NTE1OC0uNjM0NDQyOTIuNjYyNzYzNDUtLjYzNDQ0MjkyLjI1OTkwNzI0IDAgLjcyNzc0MDI3LjA0NTgxMDA1LjY4ODc1NDE4IDEuMDkwNzc0ODV6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvZz48L3N2Zz4="
          width={82}
        />
      </a>
    </div>
  );
};
