# capacitor-code-get

codeget

## Install

```bash
npm install capacitor-code-get
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`checkUpdates()`](#checkupdates)
* [`acceptInstall(...)`](#acceptinstall)
* [`rejectionInstall(...)`](#rejectioninstall)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### checkUpdates()

```typescript
checkUpdates() => void
```

--------------------


### acceptInstall(...)

```typescript
acceptInstall(options: { value: boolean; }) => void
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

--------------------


### rejectionInstall(...)

```typescript
rejectionInstall(options: { value: boolean; }) => void
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

--------------------

</docgen-api>
