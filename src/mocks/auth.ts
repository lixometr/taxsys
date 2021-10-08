import { rest } from "msw";
export default [
  rest.post("/api/login", (req, res, ctx) => {
    return res(
      ctx.json({
        expires_in: 2592000,
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90YXhzeXMucnVcL2FwaVwvbG9naW4iLCJpYXQiOjE2MzM2OTUzMjYsImV4cCI6MTYzNjI4NzMyNiwibmJmIjoxNjMzNjk1MzI2LCJqdGkiOiJ3ZnZaTFl0Z2JIWGQzWkt0Iiwic3ViIjozLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kVD4UHmKKxusw8ms1bzDIVkDLTWzjym_IyUm74bd1f8",
        token_type: "bearer",
      })
    );
  }),
];
