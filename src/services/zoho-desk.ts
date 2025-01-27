// Import Zoho Desk modules
// import {ZDPortalHome} from '@zohocorp/zohodesk-portal-core';
import {ZohoDeskPortalHome} from '@zohocorp/zohodesk-portal-core';

//import {ZDPortalKB} from '@zohocorp/zohodesk-portal-kb';
import {ZohoDeskPortalKB} from '@zohocorp/zohodesk-portal-kb';

//import {ZohoDeskPortalCommunity} from 'zohodesk-portal-community';
import {ZohoDeskPortalCommunity} from '@zohocorp/zohodesk-portal-community';

import {ZohoDeskPortalTicket} from '@zohocorp/zohodesk-portal-ticket';
import {ZohoDeskPortalSalesIQ} from '@zohocorp/zohodesk-portal-salesiq';
// import {ZohoDeskPortalChatKit} from 'zohodesk-portal-chatkit';
import {ZohoDeskPortalChatKit} from '@zohocorp/zohodesk-portal-chatkit';

export const ZohoDeskService = {
  openTickets: () => {
    try {
      ZohoDeskPortalTicket.show();
    } catch (error) {
      console.error('Error opening Tickets:', error);
    }
  },
  openHomeScreen: () => {
    try {
      ZohoDeskPortalHome.show();
    } catch (error) {
      console.error('Error opening Home Screen:', error);
    }
  },

  openKnowledgeBase: () => {
    try {
      ZohoDeskPortalKB.show();
    } catch (error) {
      console.error('Error opening Knowledge Base:', error);
    }
  },

  openCommunity: () => {
    try {
      ZohoDeskPortalCommunity.show();
    } catch (error) {
      console.error('Error opening Community:', error);
    }
  },

  openSalesIQ: () => {
    try {
      ZohoDeskPortalSalesIQ.show();
    } catch (error) {
      console.error('Error opening SalesIQ:', error);
    }
  },

  openGuidedConversation: () => {
    try {
      ZohoDeskPortalChatKit.showGC();
    } catch (error) {
      console.error('Error opening Guided Conversation:', error);
    }
  },

  openBusinessMessaging: () => {
    try {
      ZohoDeskPortalChatKit.showBM();
    } catch (error) {
      console.error('Error opening Business Messaging:', error);
    }
  },

  openAnswerBot: () => {
    try {
      ZohoDeskPortalChatKit.showAnswerBot();
    } catch (error) {
      console.error('Error opening Answer Bot:', error);
    }
  },
};
