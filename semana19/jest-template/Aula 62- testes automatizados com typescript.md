### Exercicio 1
a)
```Ts
interface User {
	name: string
	balance: number
}
```

b)
```Ts
function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
```
### Exercicio 2
```ts
a)
test("Testing balance greater than value", () => {
    const user: User = {
        name: "Astrodev",
        balance: 100
    }

    const result = performPurchase(user, 50)

    expect(result).toEqual({
        ...user,
        balance: 50
    })
})
b)
test("Testing balance equal to value", () => {
    const user: User = {
        name: "Astrodev",
        balance: 50
    }

    const result = performPurchase(user, 50)

    expect(result).toEqual({
        ...user,
        balance: 0
    })
})
c)
test("Testing balance minor to value", () => {
    const user: User = {
        name: "Astrodev",
        balance: 50
    }

    const result = performPurchase(user, 70)

    expect(result).toEqual( undefined)
})
```
### Exercicio 3
a) ok
b)
```ts
import {Casino, LOCATION, NACIONALITY, User} from "./exercicio3Imput";
import {Result} from "./exercicio3output";

export function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
            break;
        }
    }

    return {
        brazilians: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
        },
        americans: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
        },
    };

}

```
c) imaginar um metodo de teste de maneira a usar arrays

### Exercicio 4

```ts
import {Casino, LOCATION, NACIONALITY,User} from "../src/exercicio3/exercicio3Imput";
import {verifyAge} from "../src/exercicio3/exercicio3";
a)
test("1 brazilian allowed", () => {
    const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
});
b)
test("1 american allowed", () => {
    const american: User = {
        name: "Astrodev",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
});
c)
test("2 brazilian and 2 american to be tested", () => {
    const american: User  = {
        name: "Astrodev fat",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
    };
    const brazilian: User  = {
        name: "Astrodev hue",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Cosmic Cassino",
        location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev hue","Astrodev hue"]);
    expect(result.americans.unallowed).toEqual(["Astrodev fat","Astrodev fat"]);
});
d)
test("2 brazilian and 2 american to be tested part 2", () => {
    const american: User  = {
        name: "Astrodev fat",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
    };
    const brazilian: User  = {
        name: "Astrodev hue",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Cosmic Cassino",
        location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev hue","Astrodev hue"]);
    expect(result.americans.allowed).toEqual(["Astrodev fat","Astrodev fat"]);
});
```
### Exercicio 5
```ts
import {Casino, LOCATION, NACIONALITY,User} from "../src/exercicio3/exercicio3Imput";
import {verifyAge} from "../src/exercicio3/exercicio3";
a)
test("1 brazilian allowed", () => {
    const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
});
b=
test("1 americam unallowed", () => {
    const american: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    expect(result.americans.unallowed.length).toEqual(0);
});
c)
test("2 brazilians and 2 americans", () => {
    const american: User = {
        name: "Astrodev fat",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
    };

    const brazilian: User = {
        name: "Astrodev hue",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Cosmic Cassino",
        location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american
    ]);
    expect(result.brazilians.unallowed).toContain("Astrodev hue");
    expect(result.americans.unallowed).toContain("Astrodev fat");
});
d)
test("2 brazilians and 2 americans part 2", () => {
    const american: User = {
        name: "Astrodev fat",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
    };

    const brazilian: User = {
        name: "Astrodev hue",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Cosmic Cassino",
        location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american
    ]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toEqual(2);
});
```

### Exercicio 6

