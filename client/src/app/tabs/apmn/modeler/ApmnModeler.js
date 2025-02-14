/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import ApmnModeler from 'apmn-js/lib/Modeler';

import minimapModule from 'diagram-js-minimap';

import diagramOriginModule from 'diagram-js-origin';

import alignToOriginModule from '@bpmn-io/align-to-origin';
import addExporterModule from '@bpmn-io/add-exporter';

import executableFixModule from './features/executable-fix';
import globalClipboardModule from './features/global-clipboard';
import applyDefaultTemplates from './features/apply-default-templates';
import propertiesPanelKeyboardBindingsModule from './features/properties-panel-keyboard-bindings';

import Flags, { DISABLE_ADJUST_ORIGIN } from '../../../../util/Flags';

import signavioCompatModule from 'bpmn-js-signavio-compat';

import camundaModdlePackage from 'camunda-apmn-moddle/resources/camunda';
import camundaModdleExtension from 'camunda-apmn-moddle/lib';

import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';


import 'bpmn-js-properties-panel/styles/properties.less';

import 'apmn-js/dist/assets/diagram-js.css';
import 'apmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

import 'diagram-js-minimap/assets/diagram-js-minimap.css';


export default class CamundaApmnModeler extends ApmnModeler {

  constructor(options = {}) {

    const {
      moddleExtensions,
      ...otherOptions
    } = options;

    super({
      ...otherOptions,
      moddleExtensions: {
        camunda: camundaModdlePackage,
        ...(moddleExtensions || {})
      }
    });
  }
}

const defaultModules = ApmnModeler.prototype._modules;

const extensionModules = [
  minimapModule,
  addExporterModule,
  executableFixModule,
  Flags.get(DISABLE_ADJUST_ORIGIN) ? diagramOriginModule : alignToOriginModule,
  globalClipboardModule,
  signavioCompatModule,
  camundaModdleExtension,
  propertiesPanelModule,
  propertiesProviderModule,
  applyDefaultTemplates,
  propertiesPanelKeyboardBindingsModule,
];

CamundaApmnModeler.prototype._modules = [
  ...defaultModules,
  ...extensionModules
];