import { Request, Response, NextFunction } from 'express';
import { adminAuth } from '../lib/firebase-admin.ts';
import { DecodedIdToken } from 'firebase-admin/auth';

export interface AuthRequest extends Request {
  user?: DecodedIdToken;
}

export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (!adminAuth) {
    // When Firebase is disconnected, allow access with guest/partner identity
    req.user = {
      uid: 'guest-partner',
      email: 'partner@bedfordshirebiotech.co.uk',
      name: 'Verified Partner',
      email_verified: true,
      auth_time: Math.floor(Date.now() / 1000),
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600,
      aud: 'neon-partner',
      iss: 'neon-auth',
      sub: 'guest-partner',
      firebase: { sign_in_provider: 'neon', identities: {} },
    } as DecodedIdToken;
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  const token = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

export const optionalAuth = async (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  if (!adminAuth) {
    req.user = {
      uid: 'guest-partner',
      email: 'partner@bedfordshirebiotech.co.uk',
      name: 'Verified Partner',
      email_verified: true,
      auth_time: Math.floor(Date.now() / 1000),
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600,
      aud: 'neon-partner',
      iss: 'neon-auth',
      sub: 'guest-partner',
      firebase: { sign_in_provider: 'neon', identities: {} },
    } as DecodedIdToken;
    return next();
  }

  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split('Bearer ')[1];
    try {
      const decodedToken = await adminAuth.verifyIdToken(token);
      req.user = decodedToken;
    } catch (error) {
      console.warn('Optional auth token invalid:', error);
    }
  }
  next();
};
