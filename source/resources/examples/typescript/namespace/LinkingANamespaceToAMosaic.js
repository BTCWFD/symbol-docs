"use strict";
/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with namespace name
const namespaceId = new symbol_sdk_1.NamespaceId('foo');
// replace with mosaic id
const mosaicId = new symbol_sdk_1.MosaicId('7cdf3b117a3c40cc');
/* end block 01 */
/* start block 02 */
// replace with networkType
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
const mosaicAliasTransaction = symbol_sdk_1.AliasTransaction.createForMosaic(symbol_sdk_1.Deadline.create(), symbol_sdk_1.AliasAction.Link, namespaceId, mosaicId, networkType, symbol_sdk_1.UInt64.fromUint(2000000));
// replace with private key
const privateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const account = symbol_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '45870419226A7E51D61D94AD728231EDC6C9B3086EF9255A8421A4F26870456A';
const signedTransaction = account.sign(mosaicAliasTransaction, networkGenerationHash);
// replace with node endpoint
const nodeUrl = 'http://api-xym-harvest-3-01.us-west-2.nemtech.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 02 */
