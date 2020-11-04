---
description: Getting started with Web3Signer
---

# Start Web3Signer

Web3Signer supports the Ethereum 1, Ethereum 2, and Filecoin platforms, so you must specify the
signing mode to use when starting Web3Signer.

**Prerequisites**:

* [Signing key configuration files] to access the required signing keys.

Start Web3Signer by specifying the signing mode to use, and the location of the signing key
configuration files.

!!! example

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ eth2
    ```

In the command line:

* Use the [`--key-store-path`](../../Reference/CLI/CLI-Syntax.md#key-store-path) option to specify
    the location of the signing key configuration files.
* Specify the [subcommand] to indicate which signing mode to use. Valid subcommands are `eth1`,
    `eth2`, and `filecoin`. You can only specify one signing mode when starting Web3Signer.

!!! note

     Web3Signer also allows you to [bulk load Ethereum 2.0 signing keys] stored in Azure Key Vault.

Start the client, for example [Teku] by specifying the Web3Signer details.

<!-- Links -->
[Signing key configuration files]: ../Use-Signing-Keys.md
[Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/External-Signer/Use-External-Signer/
[subcommand]: ../../Reference/CLI/CLI-Subcommands.md
[bulk load Ethereum 2.0 signing keys]: ../Use-Signing-Keys.md#bulk-loading-ethereum-20-keys