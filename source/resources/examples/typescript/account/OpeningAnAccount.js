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
// replace with private key
const privateKey = '0000000000000000000000000000000000000000000000000000000000000000';
const account = symbol_sdk_1.Account.createFromPrivateKey(privateKey, symbol_sdk_1.NetworkType.TEST_NET);
console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey);
/* end block 01 */
